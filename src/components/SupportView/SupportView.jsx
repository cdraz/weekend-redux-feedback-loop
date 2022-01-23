import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function SupportView() {
    // Store access and dispatch hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    // State variable for support score
    const [supportScore, setSupportScore] = useState(feedback.support);

    // Declare onContinue function
    const onContinue = () => {
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
    }

    return (
        <>
            <h3>How well are you being supported?</h3>
            <input 
                id="support_score"
                name="support"
                type="number"
                value={supportScore}
                onChange={event => setSupportScore(event.target.value)}
            />
            <br></br>
            <Link to="/comments">
                <button onClick={onContinue}>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default SupportView;
