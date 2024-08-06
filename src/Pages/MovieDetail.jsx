import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <h3 className="movie-id">{movie.id}</h3> 
      <img src={movie.Poster} alt={movie.Title} className="movie-image" /> 
      <h3 className="movie-name">{movie.Title}</h3> 
      <p className="movie-year">{movie.Year}</p> 
      <p className="movie-type">{movie.Type}</p> 
      <p className="movie-rating">Rating: {Array.from({length:movie.rating}).map((item,index)=>(<span key={index}>★</span>))}</p>
    </div>
  );
};

export default MovieDetail;
