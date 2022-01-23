import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function UnderstandingView() {

    // Store access, dispatch hook, history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    // State variable for understanding score
    const [understandingScore, setUnderstandingScore] = useState(feedback.understanding);

    // Declare onContinue function
    const onContinue = event => {
        event.preventDefault();
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
        // Navigate to the next page
        history.push('/support');
    }

    return (
        <>
        <h3>How well are you understanding the material?</h3>
        <form onSubmit={onContinue}>
            <input 
                required
                id="understanding_score"
                name="understanding"
                type="number"
                value={understandingScore}
                onChange={event => setUnderstandingScore(event.target.value)}
            />
            <input
                type="submit"
                value="Continue"
            />
        </form>
        </>
    )
}

export default UnderstandingView;
