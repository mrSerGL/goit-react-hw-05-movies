import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import END_POINTS from '../../services/END_POINTS';
import getMovies from 'services/getMovies';
import noImage from '../../images/no_image.jpg';

import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [page] = useState(1);
  const [end_point] = useState(END_POINTS.movieDetails);
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovies(page, end_point, id).then(response =>
      setMovieDetails(response.data)
    );
    // eslint-disable-next-line
  }, []);

  console.log(movieDetails);

  const { title, overview } = movieDetails;

  return (<>
    <div className={css.movieDetails}>
        <div>
        <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : noImage
        }
        alt={movieDetails.title}
        width="250"
      />
        </div>
     

      <div>
       <h1>{title}</h1>
       <p>User Score: {movieDetails.vote_average * 10}%</p>

      <h3>Overview</h3>
      <p>{overview}</p>
      

      {movieDetails.genres && (
        <>
          <h3>Genres</h3>
          <ul className={css.genres}>
            {movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
      </div>

    </div>
    <hr/>
    <div>
        <p>Additional information</p>
        <ul>
            <li><Link>Cast</Link></li>
            <li><Link>Reviews</Link></li>
        </ul>
    </div>
    <Outlet />
    </>
     
  
  );
};

export default MovieDetails;
