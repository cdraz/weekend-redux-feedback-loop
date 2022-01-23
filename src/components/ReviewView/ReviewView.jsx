import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ReviewView() {
    // Store access and dispatch hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    console.log('Current feedback is: ', feedback);

    // Declare onSubmit function
    const onSubmit = () => {
        console.log('in onSubmit');

        // Confirm submittal
        let confirm = window.confirm('Are you sure you would like to submit your feedback?');

        // Stop onSubmit if cancelled
        if (!confirm) {
            console.log('Submit cancelled');
            return;
        }

        // POST feedback if confirmed
        console.log('Submitting final feedback: ', feedback);
        axios.post('/feedback', feedback)
        .then( res => {
            console.log('POST /feedback success', res.data);
        })
        .catch( err => {
            console.error('POST /feedback failed', err);
        });

    }

    return (
        <>
        <h3>Review</h3>
        <table>
            <tbody>
                <tr>
                    <td>Feelings</td>
                    <td>{feedback.feeling}</td>
                </tr>
                <tr>
                    <td>Understanding</td>
                    <td>{feedback.understanding}</td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>{feedback.support}</td>
                </tr>
                <tr>
                    <td>Comments</td>
                    <td>{feedback.comments}</td>
                </tr>
            </tbody>
        </table>
        <Link to="/final">
            <button onClick={onSubmit}>
                Submit
            </button>
        </Link>
        </>
    )
}

export default ReviewView;
