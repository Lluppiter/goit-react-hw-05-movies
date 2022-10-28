import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Card } from './Styled';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    movie && (
      <>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          &#8826; Go Back
        </button>
        <Card>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`}
            alt={movie.data.original_title}
            width="300px"
            height="460px"
          />
          <div>
            <h2>{movie.data.original_title}</h2>
            <p>User Score: {Math.round(movie.data.vote_average * 10)}&#37;</p>
            <h3>Overview</h3>
            <p>{movie.data.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.data.genres.map(({ id, name }) => (
                <span key={id}>{name}, </span>
              ))}
            </p>
          </div>
        </Card>
        <div>
          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    )
  );
};
