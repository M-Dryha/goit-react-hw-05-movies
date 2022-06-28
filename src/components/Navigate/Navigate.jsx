import { NavLink, Outlet } from 'react-router-dom';

// import Home from '../Home';
// import Movies from '../Movies';
import s from './Navigate.module.css';

const Navigate = () => {
  return (
    <>
      <nav className={s.Navigate}>
        {/* <Home to="/" />
        <Movies to="/movies" /> */}

        <NavLink to="/" className={s.NavHome}>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;
