import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import NotFound from './NotFound';

import css from './App.module.css'

export const App = () => {
  return (
    <div>
      <nav className={css.Navigation}>
        <NavLink to="/" className={css.NavigationItem}>Home</NavLink>
        <NavLink to="/movies" className={css.NavigationItem}>Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>

          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
