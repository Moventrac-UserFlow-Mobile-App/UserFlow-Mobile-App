// import React from 'react'

// const HistoryPage = () => {
//   return (
//     <div>HistoryPage</div>
//   )
// }

// export default HistoryPage

import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../../App.css';

const HistoryPage = () => {
    // Dummy history data
    const historyData = [
        { exercise: 'Push-ups', count: 20, feedback: { speed: 'Moderate', strength: 'Good', recovery: 'Rest day' } },
        { exercise: 'Plank', duration: '1 minute', feedback: { speed: 'Slow', strength: 'Strong', recovery: 'Stretching' } },
        { exercise: 'Squats', count: 15, feedback: { speed: 'Fast', strength: 'Average', recovery: 'Rest day' } },
        // Add more history entries as needed
    ];

    return (
        <div className="text-center m-5-auto">
            <div className="user-icon">
                <FaUser size={48} />
            </div>
            <h2>Exercise History</h2>
            <div className="history-list">
                {historyData.map((entry, index) => (
                    <div key={index} className="history-entry">
                        <h3>{entry.exercise}</h3>
                        {entry.count && <p><strong>Count:</strong> {entry.count}</p>}
                        {entry.duration && <p><strong>Duration:</strong> {entry.duration}</p>}
                        <p><strong>Speed:</strong> {entry.feedback.speed}</p>
                        <p><strong>Strength:</strong> {entry.feedback.strength}</p>
                        <p><strong>Recovery:</strong> {entry.feedback.recovery}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryPage;
