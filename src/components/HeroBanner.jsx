import { useEffect,useState } from "react"

const API_KEY = "babc0a6184526a2c594c4daf0fc60468"

function HeroBanner(){

const [movies,setMovies] = useState([])
const [current,setCurrent] = useState(0)

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>setMovies(data.results))

},[])

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent(prev => (prev + 1) % movies.length)

},4000)

return ()=>clearInterval(interval)

},[movies])

if(!movies.length) return null

const movie = movies[current]

return(

<div
className="h-[80vh] bg-cover bg-center flex items-end"
style={{
backgroundImage:
`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
}}
>

<div className="bg-gradient-to-t from-black w-full p-10 text-white">

<h1 className="text-5xl font-bold">
{movie.title}
</h1>

<p className="max-w-xl mt-4">
{movie.overview}
</p>

</div>

</div>

)

}

export default HeroBanner
