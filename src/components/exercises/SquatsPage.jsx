import React from 'react';
import { FaUser } from 'react-icons/fa';

const Squats = () => {
    // Dummy squats history data
    const squatsHistory = [
        { date: '2024-04-02', count: 15, feedback: 'Great job!', recovery: 'Stretching' },
        { date: '2024-03-31', count: 20, feedback: 'Keep it up!', recovery: 'Rest day' },
        // Add more squats history entries as needed
    ];

    return (
        <div className="text-center m-5-auto">
            <div className="user-icon">
                <FaUser size={48} />
            </div>
            <h2>Squats</h2>
            <div className="squats-history">
                {squatsHistory.map((entry, index) => (
                    <div key={index} className="squats-entry">
                        <p><strong>Date:</strong> {entry.date}</p>
                        <p><strong>Count:</strong> {entry.count}</p>
                        <p><strong>Feedback:</strong> {entry.feedback}</p>
                        <p><strong>Recovery:</strong> {entry.recovery}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Squats;
