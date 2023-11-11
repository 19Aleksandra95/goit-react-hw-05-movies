import { useState, useEffect } from 'react';

import { getMoviesApi } from '../services/Api';

import MoviesList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesApi();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>{movies.length === 0 ? <Loader /> : <MoviesList movies={movies} />}</>
  );
};

export default Home;