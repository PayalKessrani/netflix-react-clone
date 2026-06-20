import { useEffect, useState } from "react";

const API_KEY = "babc0a6184526a2c594c4daf0fc60468";

function HeroBanner() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies.length) return null;

  const movie = movies[current];

  return (
    <div
     className="h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-10 text-white">
        
        <h1 className="text-2xl md:text-5xl font-bold">
          {movie.title}
        </h1>

        <p className="max-w-xl mt-4 text-sm md:text-base">
          {movie.overview}
        </p>

        <div className="flex gap-3 mt-5 flex-wrap">
          
          <button className="bg-red-600 hover:bg-red-700 px-4 md:px-6 py-2 rounded font-semibold">
            ▶ Watch Now
          </button>

          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 md:px-6 py-2 rounded font-semibold">
            More Info
          </button>

        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {movies.slice(0, 5).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              current === index ? "bg-red-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;