import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import ShowMoreText from "react-show-more-text";
import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';
import getMovies from 'services/getMovies';

import css from './Reviews.module.css';
// import noImage from '../../images/no_image.jpg';

const Reviews = () => {

  // const [page] = useState(1);
  const [end_point] = useState(END_POINTS.movieReviews);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

const url =  `/movie/${id}${end_point}?api_key=${API_KEY}&language=en-US`;



  useEffect(() => {
    getMovies(url).then(response =>
      setReviews(response.data.results)
    );
    // eslint-disable-next-line
  }, []);

  console.log(reviews)

  const executeOnClick = (isExpanded)=>  {
    console.log(isExpanded);
}

  return (

    <ul className={css.review}>
    {reviews.map(review => (
      <li key={review.id} className={css.item}>
        <h2 className={css.author}>{review.author}</h2>

        <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className={css.content-css}
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={2400}
                truncatedEndingComponent={"... "}
            >

        <p>{review.content}           
         </p>

         </ShowMoreText>

      </li>
    ))}
  </ul>
  )

}

export default Reviews;