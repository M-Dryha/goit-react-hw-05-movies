import { useState, useEffect } from 'react';
import { getMovieById } from 'API';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import placeHolder from '../../data/no-image.jpg';
import s from './MovieDetails.module.css';
// import Reviews from '../Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

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
    <main className={s.cardContainer}>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <Link to={backLink}> Go back </Link>
      {film && (
        <section className={s.Container}>
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
            <p> User Score: {film.vote_average * 10}%</p>
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
        </section>
      )}
      <section className={s.section}>
        <div className={s.information}>
          <h3>Additional information</h3>

          <Link to={`cast`} movieId={movieId}>
            Cast
          </Link>
          <Link to={`reviews`} movieId={movieId}>
            Reviews
          </Link>
        </div>
      </section>
      <Outlet />
    </main>
  );
};
export default MovieDetails;
