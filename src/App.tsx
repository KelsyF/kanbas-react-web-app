import React from 'react';
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
      <HashRouter>
        <div>
            <Routes>
                <Route path="/" element={<Navigate to = "Labs" />} />
                <Route path="/Labs/*" element={<Labs />} />
            </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
