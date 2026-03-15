import { useEffect, useState } from "react";
import MovieSlider from "../components/MovieSlider";
import Loader from "../components/Loader";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

const API_KEY = "babc0a6184526a2c594c4daf0fc60468";

function Home(){

const [movies,setMovies] = useState([]);

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>setMovies(data.results))

},[])

if(!movies.length){
return <Loader/>
}

return(

<div className="bg-black min-h-screen text-white">

<HeroBanner movie={movies[0]} />

<div className="px-6">

<MovieRow
title="Popular"
fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
/>

<MovieRow
title="Top Rated"
fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
/>

<MovieRow
title="Upcoming"
fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
/>

</div>

<div className="px-6 mt-10">

<h1 className="text-3xl mb-6 font-bold">
Trending Movies
</h1>

<MovieSlider movies={movies}/>

</div>

</div>

)

}

export default Home;