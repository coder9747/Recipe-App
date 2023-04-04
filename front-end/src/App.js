import { useContext } from 'react';
import './App.css';
import { Context } from './Context/Context';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/'/>
      <Route path='/savedrecipe'/>
      <Route path='/createrecipe'/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
