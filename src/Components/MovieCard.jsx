import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id,image, title, year, type, rating }) => {

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
      <img src={image} alt={title} className="movie-image" />
      <h3 className="movie-name">{title}</h3>
      <p className="movie-year">{year}</p>
      <p className="movie-type">{type}</p>
      <p className="movie-rating">{rating}</p>
      </Link>
      
    </div>
  );
};


export default MovieCard;