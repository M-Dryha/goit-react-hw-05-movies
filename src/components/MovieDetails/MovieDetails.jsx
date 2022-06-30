import { useState, useEffect } from 'react';
import { getMovieById } from 'API';
import { useParams, Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import placeHolder from '../../data/no-image.jpg';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      setLoading(true);
      try {
        const getFilmDetails = await getMovieById(movieId);
        setFilm(getFilmDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  return (
    <section className={s.Section}>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <Link to="/"> Go back </Link>

      {film && (
        <div className={s.Container}>
          <div className={s.imageThumb}>
            <img
              className={s.Image}
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : placeHolder
              }
              alt={film.original_title}
            />
          </div>
          <div>
            <h2> {film.original_title}</h2>
            {film && (
              <div>
                <h3>Genres</h3>
                <ul className={s.genresList}>
                  {film.genres.map(genre => (
                    <li key={genre.name} className={s.movieGenres}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3>Overview</h3>
              <p> {film.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default MovieDetails;
