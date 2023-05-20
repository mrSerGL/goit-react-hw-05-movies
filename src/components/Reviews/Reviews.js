import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';
import getMovies from '../../services/getMovies';
import Status from '../../services/status';

import css from './Reviews.module.css';
// import noImage from '../../images/no_image.jpg';

const Reviews = () => {
  // const [page] = useState(1);
  const [end_point] = useState(END_POINTS.movieReviews);
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { id } = useParams();

  const url = `/movie/${id}${end_point}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovies(url).then(response => {
      if (response.data.results.length === 0) {
        setStatus(Status.IDLE);
        return;
      }
      setReviews(response.data.results);
      setStatus(Status.RESOLVED);
    });
    // eslint-disable-next-line
  }, []);


  const executeOnClick = isExpanded => {
    console.log(isExpanded);
  };

  return (
    <>
      {status === Status.PENDING && <p>Loading..</p>}

      {status === Status.RESOLVED && (
        <ul className={css.review}>
          {reviews.map(review => (
            <li key={review.id} className={css.item}>
              <h2 className={css.author}>{review.author}</h2>

              <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                // className={css.content-css}
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={2400}
                truncatedEndingComponent={'... '}
              >
                <p>{review.content}</p>
              </ShowMoreText>
            </li>
          ))}
        </ul>
      )}

      {status === Status.IDLE && (
        <p>We don't have any reviews for this movie.</p>   )}
    </>
  );
};

export default Reviews;
