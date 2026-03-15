export const getFavorites=()=>{
return JSON.parse(localStorage.getItem("favorites"))||[];
}

export const addFavorite=(movie)=>{
let fav=getFavorites();
fav.push(movie);
localStorage.setItem("favorites",JSON.stringify(fav));
}

export const removeFavorite=(id)=>{
let fav=getFavorites().filter(m=>m.id!==id);
localStorage.setItem("favorites",JSON.stringify(fav));
}
