/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const MovieDetails = ({ movie }: { movie: any }): React.ReactNode => {
  return (
    <div className="container flex flex-col items-start justify-start">
      <h3 className='w-full py-4 text-center text-xl font-bold'>{movie.Title}</h3>
      <div className='flex flex-row justify-start'><div className='flex flex-row justify-start'><img className='w-[600px] rounded-md' src={movie.Poster} alt={movie.Title} /></div>
        <div className='flex flex-col items-start justify-start gap-1 px-3'>
          <p><span className="font-bold">Title:</span> {movie.Title}</p>
          <p><span className="font-bold">Year:</span> {movie.Year}</p>
          <p><span className="font-bold">Genre:</span> {movie.Genre}</p>
          <p><span className="font-bold">IMDB Rating:</span> {movie.imdbRating}</p>
          <p><span className="font-bold">Director:</span> {movie.Director}</p>
          <p><span className="font-bold">Writer:</span> {movie.Writer}</p>
          <p><span className="font-bold">Plot:</span> {movie.Plot}</p>

          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
