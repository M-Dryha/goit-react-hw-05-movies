import { useState, useEffect } from 'react';
import { getMovieById } from 'API';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    async function fetchFilm() {
      try {
        const getFilmDetails = await getMovieById(movieId);
        setFilm(getFilmDetails);
      } catch (error) {}
    }
    fetchFilm();
  }, [movieId]);
  console.log(film);
  return <div>jhjg</div>;
};
export default MovieDetails;
