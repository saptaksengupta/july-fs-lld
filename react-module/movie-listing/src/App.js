import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import MovieDetailsPage from './pages/MovieDetailsPage';
import HomePage from './pages/HomePage';

const ErrorElement = () =>{
  return (
    <div>
      <h2>404, Not found!</h2>
      <Link to={"/"} >Go to Home</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/movies/:movieId' element={ <MovieDetailsPage/> }></Route>
          <Route path='*' element={<ErrorElement/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
