import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(){

const [search,setSearch] = useState("");
const navigate = useNavigate();

const handleSearch = (e)=>{
e.preventDefault();

if(search.trim()){
navigate(`/movies?search=${search}`);
setSearch("");
}
}

return(

<div className="flex justify-between items-center p-4 
bg-black/70 backdrop-blur-md text-white sticky top-0 z-50">


<h1 className="text-red-600 text-2xl font-bold">
MovieFlix
</h1>

<form onSubmit={handleSearch}>

<input
type="text"
placeholder="Search movies..."
className="px-3 py-1 rounded text-black"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</form>

<div className="space-x-4">

<Link className="hover:text-red-500 transition" to="/">Home</Link>
<Link className="hover:text-red-500 transition" to="/movies">Movies</Link>
<Link className="hover:text-red-500 transition" to="/favorites">Favorites</Link>
<Link className="hover:text-red-500 transition" to="/about">About</Link>


</div>

</div>

)

}

export default Navbar;
