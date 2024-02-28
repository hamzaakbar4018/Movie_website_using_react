import React, { useState, useEffect, useRef } from 'react';
import { getMovieByGenreId } from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieList = ({ genreId }) => {
    const [movieList, setMovieList] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        fetchMovieByGenreId(); 
    }, [genreId]);

    useEffect(() => {
        // Calculate the number of movies to display based on the container width
        const containerWidth = elementRef.current.offsetWidth;
        const moviesPerRow = Math.floor(containerWidth / 220); // Assuming MovieCard width is 220px
        setVisibleMovies(movieList.slice(0, moviesPerRow));
    }, [movieList]);

    const fetchMovieByGenreId = () => {
        getMovieByGenreId(genreId)
            .then(resp => {
                console.log(resp.data.results);
                setMovieList(resp.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies by genre:', error);
            });
    };

    const slideRight = () => {
        console.log("Slide right clicked");
        if (elementRef.current) {
            elementRef.current.scrollLeft += 500;
            updateVisibleMovies();
        }
    };
    
    const slideLeft = () => {
        console.log("Slide left clicked");
        if (elementRef.current) {
            elementRef.current.scrollLeft -= 500;
            updateVisibleMovies();
        }
    };
    
    const updateVisibleMovies = () => {
        if (elementRef.current) {
            const containerWidth = elementRef.current.offsetWidth;
            const moviesPerRow = Math.floor(containerWidth / 220); // Assuming MovieCard width is 220px
            const scrollLeft = elementRef.current.scrollLeft;
            const startIndex = Math.floor(scrollLeft / 220);
            const endIndex = Math.min(startIndex + moviesPerRow, movieList.length);
            const visibleMovies = movieList.slice(startIndex, endIndex);
            setVisibleMovies(visibleMovies);
        }
    };
    

    return (
        <div className='relative'>
            <IoChevronBackOutline 
                onClick={slideLeft} 
                className={`text-[50px] text-white
                p-2 z-10 cursor-pointer 
                hidden md:block absolute
                mt-[150px]`} />
            <div className='flex gap-8 pt-5 px-3' ref={elementRef}>
                {visibleMovies.map((item, index) => (
                    <div key={index}>
                        <MovieCard movie={item}/>
                    </div>
                ))}
            </div>
            <IoChevronForwardOutline 
                onClick={slideRight}
                className={`text-[50px] text-white hidden md:block
                p-2 cursor-pointer z-10 top-0
                absolute right-0 
                mt-[150px]`} /> 
        </div>
    );
};

export default MovieList;
