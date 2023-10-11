import { useEffect, useState } from "react";
import MovieApiService from "../api/MovieService";
import MovieCard from "./MovieCard";
import "./styles/MovieList.css";

const MovieList = ({searchKeyword}) => {

    const [allMovies, setAllMovies] = useState(null);
    const [movies, setMovies] = useState(null);

    // let movies = [];
    useEffect(() => {
        MovieApiService.fetchMovies().then((resp) => {
            if (resp && resp.length > 0) {
                setAllMovies(resp);
                setMovies(resp);
            }
        });
    }, []);

    // Filter movies 
    useEffect(() => {
        if (searchKeyword) {
            const searched = allMovies.filter(movie => {
                return movie.name.includes(searchKeyword);
            });
            setMovies(searched);
        } else {
            setMovies(allMovies);
        }

    }, [searchKeyword]);

    return (
        <div className="movie-list-container">
            {
                movies && movies.map((movie, index) => {
                    return (
                        <MovieCard movie={movie} key={index} />
                    )
                })
            }
        </div>
    )
}

export default MovieList;