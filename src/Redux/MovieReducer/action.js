import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const fetchMovies =
  (queryParams = {}) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    try {
      const response = await axios.get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`
      );
      let movies = response.data;
      // console.log(movies)
      // console.log(queryParams)
      if (queryParams.rating?.length > 0) {
        const ratings = Array.isArray(queryParams.rating)
          ? queryParams.rating
          : [queryParams.rating];
        movies = movies.filter((movie) =>
          ratings.includes(movie.rating.toString())
        );
      }

      if (queryParams.order) {
        movies.sort((a, b) =>
          queryParams.order === "asc" ? +a.Year - +b.Year : +b.Year - +a.Year
        );
      }

      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILURE });
    }
  };
