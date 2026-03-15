import Slider from "react-slick";
import MovieCard from "./MovieCard";

function MovieSlider({ movies }) {

  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }

    ]
  };

  return (

    <Slider {...settings}>

      {movies.map(movie => (

        <div key={movie.id} className="p-2">

          <MovieCard movie={movie} />

        </div>

      ))}

    </Slider>

  );
}

export default MovieSlider;
