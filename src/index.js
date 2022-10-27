import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';
import Pagina404 from './pages/Pagina404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>     
      <Route path='/' element={<Home />} exact /> 
      <Route path='/cadastro/video' element={<CadastroVideo />}/>
      <Route element={<Pagina404 />}/>
    </Routes>
  </Router>
);