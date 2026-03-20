import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetectFace from './components/DetectFace';

function App() {
    return (
      <BrowserRouter basename="/detect-face">
        <Routes>
          {/* This renders DetectFace when the user visits /detect-face/ */}
          <Route path="/" element={<DetectFace />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
