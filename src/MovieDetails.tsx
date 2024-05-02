/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const MovieDetails = ({ movie }:{movie:any}):React.ReactNode => {
  return (
    <div className="flex flex-col justify-start container items-start">
      <h3 className='w-full text-center text-xl font-bold py-4'><span className="font-bold">Title:</span> {movie.Title}</h3>
      <div className='flex flex-row justify-start'><div className='flex flex-row justify-start'><img className='rounded-md w-[600px]' src={movie.Poster} alt={movie.Title} /></div>
      <div className='flex flex-col justify-start'>
        <p><span className="font-bold">Plot:</span> {movie.Plot}</p>
        <br/>
        <p><span className="font-bold">IMDB Rating:</span> {movie.imdbRating}</p>
      {/* Add more details as needed */}
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;
