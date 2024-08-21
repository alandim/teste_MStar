import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mercadorias from './pages/Mercadorias';
import Entradas from './pages/Entradas';
import Saidas from './pages/Saidas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mercadorias" element={<Mercadorias />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/saidas" element={<Saidas />} />
      </Routes>
    </Router>
  );
}

export default App;
