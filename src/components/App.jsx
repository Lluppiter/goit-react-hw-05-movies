import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { MoviePage } from 'pages/MoviesPage';
import { MovieDetails } from 'pages/MovieDetail';
// import { MovieCast } from 'pages/MoviesPage/MovieCast/MovieCast';
// import { MovieReview } from 'pages/MoviesPage/MovieReviews/MovieReview';

const MovieCast = lazy(() =>
  import('../pages/MovieCast').then(module => ({
    ...module,
    default: module.MovieCast,
  }))
);

const MovieReview = lazy(() =>
  import('../pages/MovieReview').then(module => ({
    ...module,
    default: module.MovieReview,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReview />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
