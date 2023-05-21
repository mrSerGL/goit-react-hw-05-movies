import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const checkSubmitQuery = event => {
    event.preventDefault();

    if (query.trim().length === 0) {

      console.log("query is empty")

      toast('Please enter your query!');
      return;
    }

    onHandleSubmit(query.trim());
    setQuery('');
  };

  return (
    <form onSubmit={checkSubmitQuery} className={css.form}>
      <input
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name..."
        onChange={handleChangeQuery}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

SearchBox.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
