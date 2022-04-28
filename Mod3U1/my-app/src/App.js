import logo from './logo.svg';
import './App.css';
import Home from './Home';
import HomeC from './HomeC';
import Producto from "./Producto";
import ContadorPersonas from "./ContadorPersonas";
import Coches from "./Coches";
import Detalle from "./Detalle";
import Registro from "./Registro";
import Login from "./Login";
import Menu from "./Menu";
import Footer from "./Footer";
//importar modulos React-DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Home />
          <HomeC />

          <Producto />

          <ContadorPersonas />
          <Coches />

        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Menu />
          <Routes>
            <Route path="/alta" element={<Registro />}/>
            <Route path="/ingresar" element={<Login />}/>
            <Route path="/"element={<HomeC />}/>
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
