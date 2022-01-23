import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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

    // Set score options for MUI select and menu item
    const scores = [ 1, 2, 3, 4, 5 ]

    return (
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5">
                    How are you feeling today?
                </Typography>
                <form onSubmit={onContinue}>
                    <TextField sx={{ width: 125, margin: 5 }}
                        required
                        select
                        variant="outlined"
                        label="Feeling"
                        type="number"
                        value={feelingScore}
                        onChange={event => setFeelingScore(event.target.value)}
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
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

export default FeelingView;
