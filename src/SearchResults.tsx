/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const SearchResults = ({ results, onSelectMovie }: { [key: string]: any }): React.ReactNode => {
  return (
    <div className="container flex flex-col items-start justify-start">
      <h3 className='w-full py-4 text-center text-xl font-bold'>Search Results</h3>
      <div className='flex w-full flex-row items-center justify-start gap-3 overflow-auto'>
        {results.map((movie: any) => (
          <div className='flex w-80 cursor-pointer flex-col items-start justify-start py-2 hover:text-blue-950 hover:underline' key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
            <div className="flex w-full flex-row items-center justify-center">
              <img src={movie.Poster} className="aspect-square w-80 min-w-80 rounded-md" alt="movie poster" />
            </div>
            <div className="w-full truncate p-1 font-bold">{movie.Title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
