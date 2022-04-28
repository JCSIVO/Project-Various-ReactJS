import logo from './logo.svg';
import './App.css';
import PortadaPage from "./Pages/PortadaPage";
import CategoriaPage from "./Pages/CategoriaPage";
import DetallePage from "./Pages/DetallePage";
import Menu from "./Components/Menu";
import NotFoundPage from "./Pages/NotFoundPage";
//importar modulos React-DOM
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


function App() {
  return (
    <Router>
         <Menu />
          <Routes>
            <Route path="/categoria" element={<CategoriaPage />}/>
            <Route path="/detalle/:id" Component={DetallePage} element={<DetallePage />}/>
            <Route path="/"  exact element={<PortadaPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </Router>
  );
}

export default App;
