import { useEffect,useState } from "react"
import MovieCard from "./MovieCard"

const API_KEY = "YOUR_API_KEY"

function MovieRow({title,fetchUrl}){

const [movies,setMovies] = useState([])

useEffect(()=>{

fetch(fetchUrl)
.then(res=>res.json())
.then(data=>setMovies(data.results))

},[fetchUrl])

return(

<div className="p-6">

<h2 className="text-white text-2xl mb-4">
{title}
</h2>

<div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-5">
{movies.map(movie=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

</div>

)

}

export default MovieRow