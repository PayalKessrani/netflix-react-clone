import {useState} from "react";

function SearchBar({onSearch}){

const[query,setQuery]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();
onSearch(query);
}

return(

<form onSubmit={handleSubmit} className="p-4">

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Search movie..."
className="p-2 text-black"
/>

<button className="ml-2 bg-red-600 px-3 py-1">
Search
</button>

</form>

)

}

export default SearchBar;
