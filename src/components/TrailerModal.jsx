import { useEffect,useState } from "react"

const API_KEY = "babc0a6184526a2c594c4daf0fc60468"

function TrailerModal({ movie, close }){

const [video,setVideo] = useState(null)

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

const trailer = data.results.find(
v => v.type === "Trailer" && v.site === "YouTube"
)

setVideo(trailer)

})

},[movie])

if(!video) return null

return(

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

<div className="bg-black p-6 rounded relative">

<button
onClick={close}
className="absolute top-3 right-4 text-white text-xl"
>
✖
</button>

<iframe
width="700"
height="400"
src={`https://www.youtube.com/embed/${video.key}`}
title="Trailer"
allowFullScreen
/>

</div>

</div>

)

}

export default TrailerModal