import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PredictionFeed from './pages/PredictionFeed';
import PredictionDetail from './pages/PredictionDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PredictionFeed />} />
        <Route path="/prediction/:id" element={<PredictionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;