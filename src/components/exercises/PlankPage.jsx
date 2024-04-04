// import React from 'react'

// const PlankPage = () => {
//   return (
//     <div>PlankPage</div>
//   )
// }

// export default PlankPage

import React from 'react';
import { FaUser } from 'react-icons/fa';

const PlankPage = () => {
    // Dummy plank history data
    const plankHistory = [
        { date: '2024-04-03', duration: '1 minute', feedback: 'Good form', recovery: 'Rest day' },
        { date: '2024-04-01', duration: '45 seconds', feedback: 'Great job!', recovery: 'Stretching' },
        // Add more plank history entries as needed
    ];

    return (
        <div className="text-center m-5-auto">
            <div className="user-icon">
                <FaUser size={48} />
            </div>
            <h2>Plank</h2>
            <div className="plank-history">
                {plankHistory.map((entry, index) => (
                    <div key={index} className="plank-entry">
                        <p><strong>Date:</strong> {entry.date}</p>
                        <p><strong>Duration:</strong> {entry.duration}</p>
                        <p><strong>Feedback:</strong> {entry.feedback}</p>
                        <p><strong>Recovery:</strong> {entry.recovery}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlankPage;
