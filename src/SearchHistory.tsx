/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const SearchHistory = ({ history }: { [key: string]: any }): React.ReactNode => {
  return (
    <div className="container flex flex-col items-start justify-start py-4">
      <h3 className='w-full py-4 text-center text-xl font-bold'>Search History</h3>
      <ul className='list-outside list-decimal'>
        {history.map((query: any, index: number) => (
          <li className='cursor-pointer hover:text-blue-950 hover:underline' key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
