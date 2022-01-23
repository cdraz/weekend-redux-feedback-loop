import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function SupportView() {
    // Store access, dispatch hook, history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    // State variable for support score
    const [supportScore, setSupportScore] = useState(feedback.support);

    // Declare onContinue function
    const onContinue = event => {
        event.preventDefault();
        console.log('in onContinue in SupportView');
        console.log('Updating support score in store: ', supportScore);
        // Dispatch support score to redux store
        dispatch({
            type: 'SUBMIT_FEEDBACK',
            payload: {
                ...feedback,
                support: Number(supportScore)
            }
        });
        // Navigate to the next page
        history.push('/comments');
    }

    return (
        <>
            <h3>How well are you being supported?</h3>
            <form onSubmit={onContinue}>
                <input
                    required
                    id="support_score"
                    name="support"
                    type="number"
                    value={supportScore}
                    onChange={event => setSupportScore(event.target.value)}
                />
                <input
                    type="submit"
                    value="Continue"
                />
            </form>
        </>
    )
}

export default SupportView;
