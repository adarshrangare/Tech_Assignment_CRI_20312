import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';

const HomePage = () => {
  return (
    <main className='main'>
      <SideBar/>
      <MovieList />
    </main>
  );
};

export default HomePage;