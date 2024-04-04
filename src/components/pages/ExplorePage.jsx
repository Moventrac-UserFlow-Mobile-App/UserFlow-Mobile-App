import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../App.css';

export default function ExplorePage() {
    // Dummy exercise data
    const exercises = [
        { name: 'Push-ups', path: '/exercises/pushups', duration: '30 seconds', sets: 3, repetitions: 15 },
        { name: 'Squats', path: '/exercises/squats', duration: '1 minute', sets: 3, repetitions: 10 },
        { name: 'Plank', path: '/exercises/planks', duration: '45 seconds', sets: 2, repetitions: null },
    ];

    return (
        <div className="text-center m-5-auto">
            <h2>Exercise Program</h2>
            <div className="exercise-list">
                {exercises.map((exercise, index) => (
                    <div key={index} className="exercise">
                        <Link to={exercise.path}>
                            <h3>{exercise.name}</h3>
                        </Link>
                        <p><strong>Duration:</strong> {exercise.duration}</p>
                        <p><strong>Sets:</strong> {exercise.sets}</p>
                        <p><strong>Repetitions:</strong> {exercise.repetitions || 'N/A'}</p>
                    </div>
                ))}
            </div>
            {/* Exercise History button */}
            <Link to="/history" className="exercise-history-button">
                Exercise History
            </Link>
        </div>
    );
}
