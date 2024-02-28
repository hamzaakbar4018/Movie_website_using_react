import React from 'react';
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className='w-[110px] md:w-[220px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in md:h-[350px]'/>
    </div>
  );
};

export default MovieCard;
