/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const SearchResults = ({ results, onSelectMovie }:{[key: string]:any}) => {
  return (
    <div className="flex flex-col container justify-start items-start">
      <h3 className='w-full text-center text-xl font-bold py-4'>Search Results</h3>
      <ul className='list-decimal list-outside'>
        {results.map((movie:any) => (
          <li className='hover:text-blue-950 cursor-pointer hover:underline' key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
            {movie.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
