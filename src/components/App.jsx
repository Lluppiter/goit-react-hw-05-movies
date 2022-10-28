import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviePage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetails } from 'pages/MovieDetails/MovieDetail';
import { MovieCast } from 'pages/MoviesPage/MovieCast/MovieCast';
import { MovieReview } from 'pages/MoviesPage/MovieReviews/MovieReview';

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
