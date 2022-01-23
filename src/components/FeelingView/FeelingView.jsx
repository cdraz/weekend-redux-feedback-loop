import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function FeelingView() {

    // Store access, dispatch hook, history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    // State variable for feeling score
    const [feelingScore, setFeelingScore] = useState(feedback.feeling);

    // Declare onContinue function
    const onContinue = event => {
        event.preventDefault();
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
        // Navigate to next page
        history.push('/understanding')
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <form onSubmit={onContinue}>
                <input
                    required
                    id="feeling_score"
                    name="feeling"
                    type="number"
                    value={feelingScore}
                    onChange={event => setFeelingScore(event.target.value)}
                />
                <input
                    type="submit"
                    value="Continue"
                />
            </form>
        </>
    )
}

export default FeelingView;
