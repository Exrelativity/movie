/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const MovieSearch = ({ onSearch, onSaveQuery }: { [key: string]: any }): React.ReactNode => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      onSaveQuery(query);
    }
  };

  return (
    <div className='container flex w-full flex-col items-center justify-center gap-2'>
      <input
        className='flex h-11 w-full flex-grow flex-row border border-solid px-1'
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='flex h-11 w-full flex-grow flex-row items-center justify-center rounded-md bg-black text-center text-white' onClick={handleSearch}><div>Search</div></button>
    </div>
  );
};

export default MovieSearch;
