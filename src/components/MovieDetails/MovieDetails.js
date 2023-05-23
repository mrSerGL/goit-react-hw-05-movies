import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';


import END_POINTS from '../../services/END_POINTS';
import API_KEY from '../../services/API_KEY';
import getMovies from 'services/getMovies';
import noImage from '../../images/no_image.jpg';
// import translateText from '../../services/getTranslate'


import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [page] = useState(1);
  const [end_point] = useState(END_POINTS.movieDetails);
  const [movieDetails, setMovieDetails] = useState([]);
  // const [translatedReview, setTranslatedReview ]  = useState('');



  const { id } = useParams();
  const navigate = useNavigate();

  const url = `${end_point}${id}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`;

  useEffect(() => {
    getMovies(url).then(response => setMovieDetails(response.data));
    // eslint-disable-next-line
  }, []);

  


  const { title, overview } = movieDetails;

  // useEffect(() => { translateText(overview).then(translate => setTranslatedReview(translate)) }, [overview]);

  // translateText(overview).then(translate => setTranslatedReview(translate))



  return (
    <>
    	<button type="button" className={css.button} onClick={() => navigate(-1)}>Back</button>
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
          <p>User Score: {(movieDetails.vote_average * 10).toFixed(0)}%</p>

          <h3>Overview </h3>
          <div>{overview}</div>
{/*         
          <div className={css.overviewUkr}>{translatedReview}</div> */}

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
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={{ pathname: `/movies/${id}/cast` }} state={id}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={{ pathname: `/movies/${id}/reviews` }} state={id}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
