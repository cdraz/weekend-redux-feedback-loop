import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function CommentsView() {
    // Store access, dispatch hook, and history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    // State variable for comments
    const [comments, setComments] = useState(feedback.comments);

    // Declare onContinue function
    const onContinue = event => {
        event.preventDefault();
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
            // Navigate to next page
            history.push('/review')
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5">
                    Are there any comments you would like to add?
                </Typography>
                <form onSubmit={onContinue}>
                    <TextField sx={{ width: 400, margin: 5 }}
                        variant="outlined"
                        multiline
                        rows={2}
                        label="Comments"
                        type="number"
                        value={comments}
                        onChange={event => setComments(event.target.value)}
                    >
                    </TextField>
                    <CardActions sx={{ marginTop: 3 }}>
                        <Button variant="contained" size="medium" type="submit">
                            Continue
                        </Button>
                        <Link to="/support">
                            <Button variant="text" type="button">
                                Back
                            </Button>
                        </Link>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

export default CommentsView;
