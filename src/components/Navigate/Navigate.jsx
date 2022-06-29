import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

// import Home from '../Home';
// import Movies from '../Movies';
import s from './Navigate.module.css';

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;

const Navigate = () => {
  return (
    <>
      <nav className={s.Navigate}>
        {/* <Home to="/" />
        <Movies to="/movies" /> */}

        <Link to="/" className={s.NavHome}>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;
