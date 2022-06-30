import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'API';

const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      setLoading(true);
      try {
        const getFilmReviews = await getMovieReviews(movieId);
        setReviews(getFilmReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {reviews &&
        reviews.results.map(({ author, content }) => (
          <div>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </div>
        ))}
      {/* {reviews === null && <p> No Reviews found =(</p>} */}
    </div>
  );
};

export default Reviews;
