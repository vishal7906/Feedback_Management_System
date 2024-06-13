import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Feedback } from '../types';
import './FeedbackForm.css';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState<Feedback[]>([]);

    useEffect(() => {
        // Fetch feedbacks from API on mount
        axios.get('http://localhost:5000/api/feedback')
            .then(response => setSubmitted(response.data))
            .catch(error => console.error('Error fetching feedback:', error));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newFeedback = { id: 0, name, feedback };
        try {
            const response = await axios.post('http://localhost:5000/api/feedback', newFeedback);
            setSubmitted([...submitted, response.data]);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
        setName('');
        setFeedback('');
    };

    const handleDelete = (id: number) => {
        // Remove feedback locally without making an API call
        setSubmitted(submitted.filter(feedback => feedback.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="feedback-form">
                <h2>Submit Your Feedback</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="submitted-feedback">
                <h3>Submitted Feedback</h3>
                {submitted.map(feedback => (
                    <div key={feedback.id} className="feedback-entry">
                        <p><strong>Name:</strong> {feedback.name}</p>
                        <p>{feedback.feedback}</p>
                        <button onClick={() => handleDelete(feedback.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackForm;
