// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { getMoviesByQuery } from 'API';
import s from './Movies.module.css';

const Movies = () => {
  // const [inputData, setInputData] = useState('');
  // const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  // useEffect(() => {}, [third]);

  // const handleQuery = e => {
  //   const { value } = e.target;
  //   setInputData(value);
  // };

  // async function handleSubmit() {
  //   console.log(query);
  //   setLoading(true);
  //   try {
  //     const response = await getMoviesByQuery(query);
  //     setData(response);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchFilms() {
      setLoading(true);
      try {
        const response = await getMoviesByQuery(query);
        setData(response);
        setSearchParams({ query: query });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    // e.preventDefault();
    // setQuery(inputData);

    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          // value={inputData}
          // onChange={handleQuery}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {loading && (
          <ThreeCircles
            color="red"
            outerCircleColor="blue"
            middleCircleColor="red"
            innerCircleColor="grey"
          />
        )}
        {data &&
          data.results.map(({ original_title, name, id }) => (
            <li key={id} className={s.ListItem}>
              <Link to={`./${id}`}>{original_title ?? name}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Movies;
