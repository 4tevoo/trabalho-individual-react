import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sombrio from './pages/Sombrio';
import GlobalStyle from './globalStyles.jsx';

function App() {
  return (
    <BrowserRouter>
      {}
      <GlobalStyle />
      
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        
        {}
        <Route path="/sombrio" element={<Sombrio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;