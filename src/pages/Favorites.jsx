import { useEffect,useState } from "react";
import { getFavorites } from "../utils/favorites";
import MovieCard from "../components/MovieCard";

function Favorites(){

const [movies,setMovies] = useState([]);

useEffect(()=>{
setMovies(getFavorites());
},[])

return(

<div className="bg-black min-h-screen text-white p-6">

<h1 className="text-3xl font-bold mb-6">
Your Favorite Movies ❤️
</h1>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

{movies.length === 0 && (
<p>No favorites yet</p>
)}

{movies.map(movie=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

</div>

)

}

export default Favorites
