import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
                    <CardActions>
                        <Link to="/support">
                            <Button variant="outlined" type="button">
                                Back
                            </Button>
                        </Link>
                        <Link to="/review">
                            <Button variant="contained" size="medium" type="submit">
                                Continue
                            </Button>
                        </Link>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

export default CommentsView;
