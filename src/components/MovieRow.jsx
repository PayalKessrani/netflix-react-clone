import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, [fetchUrl]);

  return (
    <div className="p-6">

      <h2 className="text-white text-lg md:text-2xl mb-3 md:mb-4 font-bold">
        {title}
      </h2>

      <div
         className="
flex
gap-2
sm:gap-3
md:gap-4
overflow-x-auto
scrollbar-hide
pb-4
">
      
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default MovieRow;