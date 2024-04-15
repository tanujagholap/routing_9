// import logo from './logo.svg';
import './App.css';
import Navbar from './compo/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compo/Pages/Home'
import About from './compo/Pages/About'
import Service from './compo/Pages/Service'
import Register from './compo/Pages/Register'
import Errorpage from './compo/Errorpage'
import Add from './compo/Pages/Add'
import Show from './compo/Pages/Show'
import Update from './compo/Pages/Update.js'
import Delete from './compo/Pages/Delete.js';



function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/update/:userId' element={<Update/>}></Route>
            <Route path='/delete/:userId' element={<Delete/>}></Route>
            <Route path='*' element={<Errorpage/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
