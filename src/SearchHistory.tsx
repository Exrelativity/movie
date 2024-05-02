/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const SearchHistory = ({ history }:{[key: string]:any}) => {
  return (
    <div className="flex flex-col container justify-start items-start">
      <h3 className='w-full text-center text-xl font-bold py-4'>Search History</h3>
      <ul className='list-decimal list-outside'>
        {history.map((query:any, index:number) => (
          <li className='hover:text-blue-950 hover:underline cursor-pointer' key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
