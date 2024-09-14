import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, /*Link,*/ Route, Routes, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
      <HashRouter>
        <div>
            <Routes>
                <Route path="/" element={<Navigate to = "Labs" />} />
                <Route path="/Labs/*" element={<Labs />} />
                <Route path="/Kanbas/*" element={<Kanbas />} />
            </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
