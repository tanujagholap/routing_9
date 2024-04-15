// import logo from './logo.svg';
import './App.css';
import Navbar from './compo/layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './compo/Pages/Add'
import Show from './compo/Pages/Show'
import Update from './compo/Pages/Update.js'
import Delete from './compo/Pages/Delete.js';



function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Add/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/update/:userId' element={<Update/>}></Route>
            <Route path='/delete/:userId' element={<Delete/>}></Route>
            
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
