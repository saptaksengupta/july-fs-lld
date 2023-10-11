import { useLocation } from "react-router-dom";

const MovieDetailsPage = () => {

    const {state} = useLocation();
    const movie = state.movie;
    
    return (
        <div>
            {movie.name}
            <div>
                {movie.description}
            </div>
        </div>
    )
}

export default MovieDetailsPage;