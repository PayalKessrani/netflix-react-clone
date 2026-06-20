import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

const API_KEY = "babc0a6184526a2c594c4daf0fc60468";

function Movies() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const query = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    let url = "";

    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, [query]);

  if (!movies.length) {
    return <Loader />;
  }

  return (
    <div className="px-3 md:px-6 py-6 text-white">

      <h1 className="text-2xl md:text-4xl mb-6 font-bold">
        {query
          ? `Search Results for "${query}"`
          : "Popular Movies"}
      </h1>

      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-4
        "
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </div>
  );
}

export default Movies;