import { Routes, Route, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';

//const Support = lazy(() => import('components/support/Support.js'));

import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Cast from './Cast/';
import Reviews from './Reviews';

import NotFound from './NotFound';

import css from './App.module.css';

const Home = lazy(() => import('./Home/Home.js'));

const routes = [
  { path: '/', text: 'Home' },
  { path: '/movies', text: 'Movies' },
];

export const App = () => {
  return (
    <div>
      <div className={css.Header}>
        <nav className={css.Navigation}>
          {routes.map(el => (
            <NavLink to={el.path} className={css.NavigationItem} key={el.path}>
              {el.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
