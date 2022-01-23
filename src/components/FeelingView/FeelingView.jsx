import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function FeelingView() {

    // Store access and dispatch hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    console.log('Current feedback is: ', feedback);

    // State variable for feeling score
    const [feelingScore, setFeelingScore] = useState(feedback.feeling);

    // Declare onContinue function
    const onContinue = () => {
        console.log('in onContinue in FeelingView');
        console.log('Updating feeling score in store: ', feelingScore);
        // Dispatch feeling score to redux store
        dispatch({
            type: 'SUBMIT_FEEDBACK',
            payload: {
                ...feedback,
                feeling: Number(feelingScore)
            }
        });
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <input 
                id="feeling_score"
                name="feeling"
                type="number"
                value={feelingScore}
                onChange={event => setFeelingScore(event.target.value)}
            />
            <br></br>
            <Link to="/understanding">
                <button onClick={onContinue}>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default FeelingView;
