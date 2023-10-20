import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoComponent from './components/TodoComponent';
import SingleUserComponent from './components/SingleUserComponent';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <Counter /> 
            <TodoComponent />
            <div style={{display: "flex"}}>
              <UsersComponent />
              <SingleUserComponent />
            </div>
            
          </div>
        </div>
      </Provider>

      {/* I dont want to use redux here */}
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>

  );
}

export default App;
