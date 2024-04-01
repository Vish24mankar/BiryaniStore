import axios from 'axios';
import React, { useState } from 'react'
import '../Components/Feedback.css';

const FeedbackAdd = () => {
    const [reviews, setReviews] = useState({
        uName: "",
        review: ""
    });

    const changeInputFeedback = (event) => {
        setReviews({ ...reviews, [event.target.name]: event.target.value });
    };

    const handleFeedbackData = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8888/feedback", reviews)
            .then(() => {
                window.alert("Review Added Successfully !!!");
                setReviews({ uName: "", review: "" }); // Clear input fields after submission
            })
            .catch(error => {
                console.error('Error adding review:', error);
                window.alert("Failed to add review. Please try again later.");
            });
    };

    const { uName, review } = reviews;

    return (
        <div className='container'>
            <form onSubmit={handleFeedbackData} className='cFeedback'>
                <p className='gTitle'>Feedback Form</p>
                <div>
                    <label className='t1'>Enter your name: &nbsp;</label>
                    <br />
                    <input
                        type="text"
                        id="exampleFormControlInput1"
                        name='uName'
                        value={uName}
                        onChange={(event) => changeInputFeedback(event)}
                    />
                </div>
                <br />
                <div className='ftxt'>
                    <label className='t2'>Write your review: &nbsp;</label>
                    <br />
                    <textarea
                        type="text"
                        id="exampleFormControlTextarea1"
                        name='review'
                        value={review}
                        onChange={(event) => changeInputFeedback(event)}
                        rows="7"
                        cols='49'
                    ></textarea>

                    <br /><br />
                    <button type='submit' className='sbtn'>Submit</button>
                </div>
            </form>
            {/* Display existing reviews */}
            <div className="existing-reviews">
                {/* Add your code here to display existing reviews */}
            </div>
        </div>
    )
}

export default FeedbackAdd;
