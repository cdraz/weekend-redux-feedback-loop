import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function UnderstandingView() {

    // Store access and dispatch hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    // State variable for understanding score
    const [understandingScore, setUnderstandingScore] = useState(feedback.understanding);

    // Declare onContinue function
    const onContinue = () => {
        console.log('in onContinue in UnderstandingView');
        console.log('Updating understanding score in store: ', understandingScore);
        // Dispatch understanding score to redux store
        dispatch({
            type: 'SUBMIT_FEEDBACK',
            payload: {
                ...feedback,
                understanding: Number(understandingScore)
            }
        });
    }

    return (
        <>
        <h3>How well are you understanding the material?</h3>
        <input 
                id="understanding_score"
                name="understanding"
                type="number"
                value={understandingScore}
                onChange={event => setUnderstandingScore(event.target.value)}
            />
            <br></br>
        <Link to="/support">
            <button onClick={onContinue}>
                Continue
            </button>
        </Link>
        </>
    )
}

export default UnderstandingView;
