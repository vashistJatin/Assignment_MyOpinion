import React, { useEffect, useState } from 'react';
import PredictionCard from '../components/PredictionCard';
import { mockPredictions } from '../data';
import { Prediction } from '../types';
import './PredictionFeed.css';

const PredictionFeed: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  useEffect(() => {
    setPredictions(mockPredictions);
  }, []);

  return (
    <div className="page">
      <h2>Prediction Feed</h2>
      <div className="card-grid">
        {predictions.map(pred => (
          <PredictionCard key={pred.id} prediction={pred} />
        ))}
      </div>
    </div>
  );
};

export default PredictionFeed;