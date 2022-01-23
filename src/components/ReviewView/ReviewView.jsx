import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function ReviewView() {
    // Store access and history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();

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

        // Validate that all required scores are provided
        if (!feedback.feeling || !feedback.understanding || !feedback.support) {
            window.alert('Missing a required score. Please go back and ensure all required scores are provided, then try again.')
            return;
        }

        // POST feedback if confirmed and client side validation is passed
        console.log('Submitting final feedback: ', feedback);
        axios.post('/feedback', feedback)
        .then( res => {
            console.log('POST /feedback success', res.data);
        })
        .catch( err => {
            console.error('POST /feedback failed', err);
        });

        // Navigate to next page
        history.push('/final');
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
        <Link to="/comments">
                    <button type="button">
                        Back
                    </button>
        </Link>
        <button onClick={onSubmit}>
            Submit
        </button>
        </>
    )
}

export default ReviewView;
