import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovies from 'services/getMovies';
import END_POINTS from '../../services/END_POINTS';

const Home = () => {
  const [page] = useState(1);
  const [end_point] = useState(END_POINTS.trending);
  const [moviesInTrend, setmoviesInTrend] = useState([]);
  const [id] = useState('');

  useEffect(() => {
    getMovies(page, end_point, id).then(response => setmoviesInTrend(response.data.results));
    // eslint-disable-next-line
  }, []);

  console.log(moviesInTrend);

  return (
    <>
      <h1>Trending today</h1>;
      <ul>
        {moviesInTrend.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
              }}
            >
              <span>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
