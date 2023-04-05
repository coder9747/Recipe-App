import { useContext } from 'react';
import './App.css';
import { Context } from './Context/Context';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Components/Nav';
import Register from './Components/Register';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateRecipe from './Components/CreateRecipe';
import Savedrecipe from './Components/Savedrecipe';

function App() {
  return (
    <BrowserRouter>
    <Alert/>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/savedrecipe' element={<Savedrecipe/>}/>
      <Route path='/createrecipe'element={<CreateRecipe/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
