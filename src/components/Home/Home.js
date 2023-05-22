import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import getMovies from 'services/getMovies';
import noImage from '../../images/no_image.jpg';
import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';

import css from './Home.module.css';

const Home = () => {
  const [page] = useState(1);
  const [end_point] = useState(END_POINTS.trending);
  const [moviesInTrend, setmoviesInTrend] = useState([]);
  const [id] = useState('');

  const location = useLocation();

  const url = `${end_point}${id}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`;

  useEffect(() => {
    getMovies(url).then(response => {
      if (response.data.results.length === 0) {
        Notify.failure('Please check the request and try again!');
      }

      setmoviesInTrend(response.data.results);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <ul className={css.movieList}>


          {moviesInTrend.map(movie => (
          <li key={movie.id} className={css.moviesItem}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
              className={css.link}
            >
              <img
                width="250px"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : noImage
                }
                alt={movie.title}
                className={css.poster}
              />
              <span className={css.movieTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
