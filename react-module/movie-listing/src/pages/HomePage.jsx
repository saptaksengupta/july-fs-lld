import { useEffect, useState } from "react";
import MovieApiService from "../api/MovieService";
import ChooseLanguage from "../components/ChooseLanguage";
import MovieList from "../components/MovieList";
import NavigationVar from "../components/NavigationBar";
import SearchBox from "../components/SearchBar";
import "./styles/Home.style.css";

const HomePage = () => {

    const [searchKeyword, setSearchkeyword] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [allMovies, setAllMovies] = useState(null);

    useEffect(() => {
        MovieApiService.fetchMovies().then((resp) => {
            if (resp && resp.length > 0) {
                setAllMovies(resp);
            }
        });
    }, []);

    return (
        <div>
            <NavigationVar />
            <div className="toolBarContainer">
                <SearchBox onUserSearched={setSearchkeyword} />
                <ChooseLanguage onLanguageChange={setSelectedLanguage} />
            </div>
            <MovieList searchKeyword={searchKeyword} language={selectedLanguage} allMovies={allMovies} />
        </div>
    )

}

export default HomePage;