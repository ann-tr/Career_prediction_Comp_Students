
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainRoutes from './routes/router';

const App = () => {
  return (
        <Router>
          <MainRoutes />
        </Router>
  );
};

export default App;
