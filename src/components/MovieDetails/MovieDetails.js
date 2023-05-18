import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import END_POINTS from '../../services/END_POINTS';
import getMovies from 'services/getMovies';

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

  return (
    <>
      <h1>{movieDetails.title}</h1>
    </>
  );
};

export default MovieDetails;
