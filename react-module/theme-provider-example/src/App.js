import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import { ThemeProvider } from './context-api/theme/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <ProductDetails />
        </div>
      </ThemeProvider>

      {/* some part of my page */}
      <div>
        <div className='other-cont'></div>
        <div className='other-cont'></div>
      </div>
    </>

  );
}

export default App;
