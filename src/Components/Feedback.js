import React, { useEffect, useState } from 'react';
import FeedbackAdd from './FeedbackAdd';
import axios from 'axios';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8888/feedback")
            .then((res) => {
                // Sort reviews by ID or any other criteria before setting
                const sortedReviews = res.data.sort((a, b) => a.id - b.id);
                setReviews(sortedReviews);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const deleteReview = (id) => {
        axios.delete(`http://localhost:8888/feedback/${id}`)
            .then(() => {
                window.alert("Deleted Successfully");
                // After deletion, refetch data to update the reviews
                fetchData();
            })
            .catch(error => {
                console.error('Error deleting review:', error);
            });
    }

    return (
        <div className='mainFeedback'>
            {/* <p className='gTitle'>Feedback Form</p> */}
            <FeedbackAdd />
            <div>
                <br />
                {reviews.map((data) => (
                    <div key={data.id} className="card">
                        <div className="card-header">{data.uName}</div>
                        <div className="card-body">
                            <div className="review-card">
                                <p>{data.review}</p>
                                <button type='button' onClick={() => deleteReview(data.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feedback;
