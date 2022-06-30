import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import Cast from './Cast';

import Navigate from './Navigate';
// console.log(APIService.GetFilms());
export const App = () => {
  return (
    <>
      <Navigate />
      <Routes>
        {/* <Route path="/" element={<Navigate />}> */}
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route /> */}
        {/* </Route> */}

        <Route path="movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}

        {/* <Route path=":teamId" element={<div>1</div>}>
          <Route path="cast" element={<div>2</div>} />
          <Route path="reviews" element={<div>3</div>} />
        </Route> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};
