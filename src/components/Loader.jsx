function Loader(){

return(

<div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">

{Array(10).fill().map((_,i)=>(

<div
key={i}
className="h-[225px] bg-gray-800 animate-pulse rounded"
/>

))}

</div>

)

}

export default Loader

