import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Prediction } from '../types';
import './PredictionCard.css';

interface Props {
  prediction: Prediction;
}

const PredictionCard: React.FC<Props> = ({ prediction }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{prediction.question}</h3>
      <p>Countdown: {prediction.countdown}</p>
      <p>Participants: {prediction.totalParticipation}</p>
      <button onClick={() => navigate(`/prediction/${prediction.id}`)}>View</button>
    </div>
  );
};

export default PredictionCard;