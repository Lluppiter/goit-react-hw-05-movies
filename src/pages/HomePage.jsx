import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchApi } from 'services/movieApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsloading(true);
    fetchApi()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(setError)
      .finally(() => setIsloading(false));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isloading && 'Loading'}
      {error && 'error'}
      {movies && (
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
