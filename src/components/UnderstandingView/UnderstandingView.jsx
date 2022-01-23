import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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

    // Set score options for MUI select and menu item
    const scores = [ 1, 2, 3, 4, 5 ]

    return (
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5">
                    How well are you understanding the material?
                </Typography>
                <form onSubmit={onContinue}>
                    <TextField sx={{ width: 175, margin: 5 }}
                        required
                        select
                        variant="outlined"
                        label="Understanding"
                        type="number"
                        value={understandingScore}
                        onChange={event => setUnderstandingScore(event.target.value)}
                    >
                        {scores.map( option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}

                    </TextField>
                    <CardActions sx={{ marginTop: 3 }}>
                        <Button variant="contained" size="medium" type="submit">
                            Continue
                        </Button>
                        <Link to="/feeling">
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

export default UnderstandingView;
