import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import END_POINTS from '../../services/END_POINTS';
import getMovies from 'services/getMovies';
import noImage from '../../images/no_image.jpg';

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

  const { title, overview, genres } = movieDetails;

  console.log(genres);

  return (
    <>
      <h1>{title}</h1>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : noImage
        }
        alt={movieDetails.title}
        width="250"
      />

      <h2>Overview</h2>
      <p>{overview}</p>
      <p>User Score: {movieDetails.vote_average * 10}%</p>
      <h2>Genres</h2>
      {/* <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default MovieDetails;
