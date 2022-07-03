import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Home } from 'components/Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import Cast from './Cast';
import Navigate from './Navigate';
import NotFoundPage from './NotFound';

// const Home = lazy(() =>
//   import('../components/Home').then(module => ({ default: module.Home }))
// );

// const Movies = lazy(() => import('./Movies/Movies'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const MovieDetails = lazy(() => import('../components/MovieDetails'));
// const Cast = lazy(() => import('../components/Cast'));
// const Navigate = lazy(() => import('./Navigate/Navigate'));
// const NotFoundPage = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Navigate />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
