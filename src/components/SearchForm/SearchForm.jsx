import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'services/movieApi';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

export const SearchForm = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    async function fetchMovies() {
      const data = await fetchMoviesByQuery(query);
      setMovies(data.data.results);
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ query: form.elements.moviename.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviename" placeholder="Forrest Gump" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
