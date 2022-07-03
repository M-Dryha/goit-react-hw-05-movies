import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { getMovieReviews } from 'API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      setLoading(true);
      try {
        const getFilmReviews = await getMovieReviews(movieId);
        setReviews(getFilmReviews.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  return (
    <div>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      {/* {reviews.results.length === 0 && <p> No Reviews found =(</p>} */}
      {reviews.length > 0 ? (
        reviews.map(({ author, content }) => (
          <div key={author}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p> No Reviews found =(</p>
      )}
    </div>
  );
};

export default Reviews;
