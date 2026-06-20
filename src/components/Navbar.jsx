import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/movies?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold">
            MovieFlix
          </h1>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full lg:w-72 px-4 py-2 rounded bg-white text-black outline-none"
          />
        </form>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base">
          <Link className="hover:text-red-500 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-red-500 transition" to="/movies">
            Movies
          </Link>

          <Link className="hover:text-red-500 transition" to="/favorites">
            Favorites
          </Link>

          <Link className="hover:text-red-500 transition" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
