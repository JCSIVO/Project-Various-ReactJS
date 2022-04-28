import logo from './logo.svg';
import './App.css';
import QuienesSomos from "./QuienesSomos";
import Portada from "./Portada";
import Home from "./Home"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        //<QuienesSomos />
        //<Portada />
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
