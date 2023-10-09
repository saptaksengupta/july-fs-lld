import { Link } from "react-router-dom";

const HomePage = ( ) => {
    return <div>
        <h1> Home! </h1>
        <div>
            <Link to={"/about-us"} > AboutUs </Link>
        </div>
    </div>
}

export default HomePage;