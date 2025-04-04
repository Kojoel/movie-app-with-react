import MovieCard from "../components/MovieCard";
import '../css/Home.css'
import { useState } from "react";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { id: 1, title: "Inception", release_date: "2010" },
        { id: 2, title: "Interstellar", release_date: "2014" },
        { id: 3, title: "The Dark Knight", release_date: "2008" },
        { id: 4, title: "Avengers: Endgame", release_date: "2019" },
        { id: 5, title: "The Matrix", release_date: "1999" },
        { id: 6, title: "Parasite", release_date: "2019" },
        { id: 7, title: "Joker", release_date: "2019" },
        { id: 8, title: "Gladiator", release_date: "2000" },
        { id: 9, title: "Titanic", release_date: "1997" },
        { id: 10, title: "John Wick", release_date: "2014" }
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery('')
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    (<MovieCard movie={movie} key={movie.id} />)
                ))}
            </div>
        </div>
    )
}

export default Home