import axios from 'axios';
// import END_POINTS from './END_POINTS'

// SerG683708  SerG683708

//Приклад API-запиту: https://api.themoviedb.org/3/movie/550?api_key=487147f1f35b8dc05ecb62d6b1edb1cd

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '487147f1f35b8dc05ecb62d6b1edb1cd';


export const getMovies = async( page, END_POINTS, id) => {

  try {
    const response = await axios.get(
      `${END_POINTS}${id}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
    );

    return response;
  } catch (error) {
    console.log('getMovies says:', error);
  }
};

export default getMovies;
