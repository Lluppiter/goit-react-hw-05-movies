import { Outlet, useLocation } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MoviePage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/movies' && <SearchForm />}
      <Outlet />
    </>
  );
};
