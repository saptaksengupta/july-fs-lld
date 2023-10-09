import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import EffectExample from './component/EffectExample';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';

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
      {/* <UserList name="Saptak" /> */}

      {/* Use effect example   */}
      {/* <EffectExample /> */}

      {/* Routing Example */}
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<ErrorElement/>}> </Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
