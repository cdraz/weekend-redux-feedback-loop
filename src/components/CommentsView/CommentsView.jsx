import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentsView() {
    // Store access and dispatch hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    // State variable for comments
    const [comments, setComments] = useState(feedback.comments);

    // Declare onContinue function
    const onContinue = () => {
        console.log('in onContinue in CommentsView');
        console.log('Updating comments in store: ', comments);
        // Dispatch comments to redux store
        dispatch({
            type: 'SUBMIT_FEEDBACK',
            payload: {
                ...feedback,
                comments: comments
            }
        });
    }

    return (
        <>
            <h3>Any comments you would like to leave?</h3>
            <input 
                    id="comments_input"
                    name="comments"
                    type="text"
                    value={comments}
                    onChange={event => setComments(event.target.value)}
            />
            <Link to="/review">
                <button onClick={onContinue}>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default CommentsView;
