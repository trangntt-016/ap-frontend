import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary Router components
import LoginPage from './components/LoginPage/LoginPage'; // Import the LoginPage component
import MainMenu from './components/MainMenu/MainMenu'; // Import the MainMenu component

function App() {
  return (
    // Set basename to "/app-frontend"
    <Router basename="/ap-frontend"> {/* Corrected basename */}
      <div className="App">
        <Routes>
          {/* Define routes relative to /app-frontend */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/MainMenu" element={<MainMenu />} /> {/* Fixed the syntax */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
