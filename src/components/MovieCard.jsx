import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "babc0a6184526a2c594c4daf0fc60468";

function MovieCard({ movie }) {
  const [video, setVideo] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube",
        );

        setVideo(trailer);
      });
  }, [hover]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="
min-w-[120px]
sm:min-w-[140px]
md:min-w-[180px]
lg:min-w-[200px]
bg-gray-900
rounded
overflow-hidden
relative
transform hover:scale-105
transition duration-300
shadow-lg
">
        ⭐ {movie.vote_average?.toFixed(1)}
      </div>

      <Link to={`/movie/${movie.id}`}>
        <img
          className="
w-full
h-[170px]
sm:h-[210px]
md:h-[270px]
object-cover
"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.title}
        />

        <div className="p-2 text-white text-xs text-center">{movie.title}</div>
      </Link>
      {hover && video && (
        <div className="absolute inset-0 z-20 hidden lg:block">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
            title="Trailer"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
