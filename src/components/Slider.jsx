import React, { useEffect, useRef, useState } from 'react';
import { getTrendingVideos } from '../Services/GlobalApi';

import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const Slider = () => {
    const screenWidth=window.innerWidth;
    const elementRef = useRef();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        getTrendingVideos().then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
    return (

        <div className=''>
            <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer'/>
          <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'/>
            <div className='flex overflow-x-auto text-white px-16 py-4 w-full scrollbar-hide scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => {
                    return <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} alt={`Movie ${index}`} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-700 transition-all duration-100 ease-in-out' />;
                })}
            </div>
        </div>        
    );
};

export default Slider;
