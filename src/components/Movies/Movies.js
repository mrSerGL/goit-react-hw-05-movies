import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';

import getMovies from 'services/getMovies';
import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';
import noImage from '../../images/no_image.jpg';

import css from './Movies.module.css';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [page] = useState(1);
  const [end_point] = useState(END_POINTS.querySearch);
  const location = useLocation();

  useEffect(() => {
    
    setSearchQuery(searchParams.get('query'));

    if (searchQuery === '' || searchQuery === "null") {
      return;
    }

    const url = `${end_point}?api_key=${API_KEY}&page=${page}&query=${searchQuery}&language=en-US&include_adult=false`;

    getMovies(url).then(response => setSearchResult(response.data.results));

    // eslint-disable-next-line
  }, [searchQuery]);

  const onHandleSubmit = query => {
    setSearchParams({ query: query });
    setSearchQuery(query);
  };

  return (
    <>
      <div>
        <SearchBox onHandleSubmit={onHandleSubmit} />
      </div>

      <ul className={css.movieList}>
        {searchResult.map(movie => (
          <li key={movie.id} className={css.moviesItem}>
            <Link
              to={{
                pathname: `${movie.id}`,
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
              {/* <span className={css.movieTitle}>{movie.title}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
