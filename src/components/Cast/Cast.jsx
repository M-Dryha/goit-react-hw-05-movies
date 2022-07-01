import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesCast } from 'API';
import { ThreeCircles } from 'react-loader-spinner';
import placeHolder from '../../data/no-image.jpg';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      setLoading(true);
      try {
        const getFilmReviews = await getMoviesCast(movieId);
        setCast(getFilmReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  console.log(cast);

  return (
    <ul className={s.castList}>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      {cast &&
        cast.cast.map(({ original_name, character, profile_path, id }) => {
          return (
            <li key={id} className={s.castItem}>
              <img
                className={s.photo}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : placeHolder
                }
                alt={original_name}
              />
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
