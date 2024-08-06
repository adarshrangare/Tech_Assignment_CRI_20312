import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading, isError, movies } = useSelector((state) => state.movies);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = {
      rating: searchParams.getAll('rating'),
      order: searchParams.get('order')
    };

    dispatch(fetchMovies(queryParams));
  }, [dispatch, location.search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching movies</div>;
  }
  // console.log(movies)
  return (
    <div data-testid="movie-list" className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.Poster}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;