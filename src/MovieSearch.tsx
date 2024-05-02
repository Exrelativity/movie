/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const MovieSearch = ({ onSearch, onSaveQuery }:{[key: string]:any}):React.ReactNode => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      onSaveQuery(query);
    }
  };

  return (
    <div className='flex flex-col container w-full justify-center items-center gap-2'>
      <input
        className='w-full h-11 flex flex-row flex-grow border border-solid px-1'
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='w-full h-11 flex flex-row rounded-md justify-center items-center flex-grow bg-blue-950 text-center text-white' onClick={handleSearch}><div>Search</div></button>
    </div>
  );
};

export default MovieSearch;
