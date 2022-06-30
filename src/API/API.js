import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const KEY = '96dea35b5a4d6ccb61b77721fd102ef9';
// const GetGenres = async () => {
//   const response = await axios.get(
//     `3/genre/movie/list?api_key=${KEY}&language=en-US`
//   );
//   return response.data;
// };

// export function GetFilms() {
//   return axios
//     .get(`3/trending/all/day?api_key=${KEY}`)
//     .then(response => response.data);
//   // console.log(response.data);
// }

// const GetFilms = async id => {
//   const response = await axios.get(
//     `3/movie/${id}?api_key=${KEY}&language=en-US`
//   );

//   return response.data;
// };

const GetFilms = async () => {
  const response = await axios.get(`3/trending/movie/day?api_key=${KEY}`);

  return response.data;
};

const getMovieById = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

function getMoviesByQuery(query) {
  return axios
    .get(
      `/3/search/movie?api_key=${KEY}&language=en-US&include_adult=false&query=${query}`
    )
    .then(response => response.data);
}

export { GetFilms, getMovieById, getMoviesByQuery };
