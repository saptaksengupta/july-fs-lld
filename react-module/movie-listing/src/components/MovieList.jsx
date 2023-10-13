import { useEffect, useState } from "react";
import MovieApiService from "../api/MovieService";
import MovieCard from "./MovieCard";
import "./styles/MovieList.css";

const MovieList = ({ searchKeyword, allMovies, language }) => {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        setMovies(allMovies);
    }, []);

    useEffect(() => {
        setMovies(allMovies);
    }, [allMovies]);

    // Filter Movies based on lang
    useEffect(() => {
        let scope = allMovies;
        if (searchKeyword) {
            scope = movies;
        }
        if (language && language !== 'All') {
            setMovies(filterArr(scope, doFilterBasedOnLang));
        } else {
            setMovies(scope);
        }
    }, [language]);


    // Search movies 
    useEffect(() => {
        let scope = allMovies;
        if (language) {
            scope = movies;
        }

        if (searchKeyword) {
            setMovies(filterArr(scope, doSearch));
        } else {
            setMovies(scope);
        }

    }, [searchKeyword]);


    const filterArr = (arr, condion) => {
        return arr.filter(item => condion(item));
    }

    const doSearch = movie => {
        return movie.name.includes(searchKeyword);
    };

    const doFilterBasedOnLang = movie => {
        return movie.language === language
    }

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