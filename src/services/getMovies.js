import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async url => {
  try {
    const response = await axios.get(`${url}`);

    return response;
  } catch (error) {
    console.log('getMovies says:', error);
  }
};

export default getMovies;
