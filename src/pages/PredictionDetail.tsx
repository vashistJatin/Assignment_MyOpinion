import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockPredictions } from '../data';
import './PredictionDetail.css';

const PredictionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const prediction = mockPredictions.find(p => p.id === id);
  const [amount, setAmount] = useState('');
  const [choice, setChoice] = useState<'Yes' | 'No' | null>(null);

  if (!prediction) return <p>Prediction not found.</p>;

  const handleConfirm = () => {
    if (!choice || !amount) {
      alert('Please select Yes/No and enter an amount');
      return;
    }
    alert(`Your prediction has been processed!\n\nChoice: ${choice}\nAmount: ${amount}`);
  };

  return (
    <div className="detail-page">
      <h2>{prediction.question}</h2>
      <div className="buttons">
        <button onClick={() => setChoice('Yes')}>Yes</button>
        <button onClick={() => setChoice('No')}>No</button>
      </div>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default PredictionDetail;