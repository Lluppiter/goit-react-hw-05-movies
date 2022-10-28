import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByIdForCredits } from 'servises/movieApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieByIdForCredits(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
