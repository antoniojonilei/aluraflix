import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CadastroVideo from './components/CadastroVideo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>     
      <Route path='/cadastro/video' element={<CadastroVideo />}/>
      <Route path='/' element={<App />} exact /> 
    </Routes>
  </Router>
);