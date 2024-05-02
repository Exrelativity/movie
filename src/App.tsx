/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useState } from 'react';
import MovieSearch from './MovieSearch';
import SearchHistory from './SearchHistory';
import SearchResults from './SearchResults';
import MovieDetails from './MovieDetails';

const App = (): React.ReactNode => {
  const [searchHistory, setSearchHistory] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>();
  const [selectedMovie, setSelectedMovie] = useState<any>();

  const API_KEY = '8151d16c';

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await response.json();
      setSearchResults(data.Search || []);
    } catch (error) {
      console.error('Error searching for movies:', error);
      setSearchResults([]);
    }
  };

  const handleMovieSelect = async (imdbID: string) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setSelectedMovie(null);
    }
  };

  const handleSaveSearchQuery = (query: string) => {
    const updatedHistory = [query, ...searchHistory.slice(0, 4)];
    setSearchHistory(updatedHistory);
  };

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-neutral-100'>
      <h1 className='w-full py-4 text-center text-2xl font-bold'>Movie Search App</h1>
      <MovieSearch onSearch={handleSearch} onSaveQuery={handleSaveSearchQuery} />
      {searchResults && <SearchResults results={searchResults} onSelectMovie={handleMovieSelect} />}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      {searchHistory.length > 0 && <SearchHistory history={searchHistory} />}
    </div>
  );
};

export default App;
