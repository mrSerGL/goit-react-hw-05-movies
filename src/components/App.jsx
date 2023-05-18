import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import NotFound from './NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
