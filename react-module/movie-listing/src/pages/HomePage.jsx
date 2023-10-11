import { useState } from "react";
import MovieList from "../components/MovieList";
import NavigationVar from "../components/NavigationBar";
import SearchBox from "../components/SearchBar";

const HomePage = () => {

    const [searchKeyword, setSearchkeyword] = useState(null);
    return (
        <div>
            <NavigationVar />
            <SearchBox onUserSearched={setSearchkeyword} />
            <MovieList searchKeyword={searchKeyword} />
        </div>
    )

}

export default HomePage;