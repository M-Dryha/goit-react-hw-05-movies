import s from './Pages.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetFilms } from 'API';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    GetFilms()
      .then(data => {
        setData(data);
      })

      .catch(error => console.error(error));
  }, []);

  // useEffect(() => {
  //   async function fetchFilms() {
  //     try {
  //       const response = GetFilms();
  //       setData(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchFilms();
  // }, []);

  // console.log(data.data.results);

  return (
    <ul>
      {data &&
        data.results.map(({ original_title, name, id }) => (
          <li key={id} className={s.ListItem}>
            <Link to={`./movies/${id}`}>{original_title ?? name}</Link>
          </li>
        ))}
    </ul>
  );
};
