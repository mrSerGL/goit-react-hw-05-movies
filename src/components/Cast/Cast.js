import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';
import getMovies from 'services/getMovies';

import css from './Cast.module.css';
import noImage from '../../images/no_image.jpg';

const Cast = () => {
  // const [page] = useState(1);
  const [end_point] = useState(END_POINTS.movieCredits);
  const [cast, setCast] = useState([]);

    const { id } = useParams();

    console.log(id)

  // const location = useLocation();
  // const id = location.state;

  const url = `/movie/${id}${end_point}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    getMovies(url).then(response => setCast(response.data.cast));
    // eslint-disable-next-line
  }, []);

  console.log(cast);

  return (
    <ul className={css.cast}>
      {cast.map(actor => (
        <li key={actor.id} className={css.castItem}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : noImage
            }
            alt={actor.original_name}
            className={css.castImg}
          />
          <h4 className={css.name}>{actor.original_name}</h4>
          <p className={css.character}>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
