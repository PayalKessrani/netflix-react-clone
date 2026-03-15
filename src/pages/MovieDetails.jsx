import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrailerModal from "../components/TrailerModal";

const API_KEY = "babc0a6184526a2c594c4daf0fc60468";

function MovieDetails(){

const { id } = useParams();

const [movie,setMovie] = useState(null);
const [showTrailer,setShowTrailer] = useState(false);

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>setMovie(data))

},[id])

if(!movie){
return <p className="text-white p-10">Loading...</p>
}

return(

<div className="text-white">

<div
className="h-[80vh] bg-cover bg-center flex items-end"
style={{
backgroundImage:
`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
}}
>

<div className="bg-gradient-to-t from-black w-full p-10">

<h1 className="text-5xl font-bold">
{movie.title}
</h1>

<p className="mt-4 max-w-xl">
{movie.overview}
</p>

<button
onClick={()=>setShowTrailer(true)}
className="bg-red-600 px-6 py-2 mt-5 rounded hover:bg-red-700"
>
Watch Trailer
</button>

</div>

</div>

<div className="p-10 flex gap-10">

<img
className="w-64 rounded"
src={
movie.poster_path
? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
: "https://via.placeholder.com/400x600?text=No+Image"
}
alt={movie.title}
/>

<div>

<h2 className="text-2xl font-bold mb-3">
Movie Info
</h2>

<p>⭐ Rating: {movie.vote_average}</p>

<p className="mt-2">
Release Date: {movie.release_date}
</p>

</div>

</div>

{showTrailer && (
<TrailerModal
movie={movie}
close={()=>setShowTrailer(false)}
/>
)}

</div>

)

}

export default MovieDetails