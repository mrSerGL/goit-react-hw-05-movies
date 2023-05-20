import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import NotFound from './NotFound';

import Cast from './Cast/';
import Reviews from './Reviews';

import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <div className={css.Header}>
        <nav className={css.Navigation}>
          <NavLink to="/" className={css.NavigationItem}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.NavigationItem}>
            Movies
          </NavLink>
        </nav>
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
