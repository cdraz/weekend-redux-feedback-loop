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

    // Set score options for MUI select and menu item
    const scores = [ 1, 2, 3, 4, 5 ]

    return (
        <Card sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5">
                    How well are you being supported?
                </Typography>
                <form onSubmit={onContinue}>
                    <TextField sx={{ width: 125, margin: 5 }}
                        required
                        select
                        variant="outlined"
                        label="Support"
                        type="number"
                        value={supportScore}
                        onChange={event => setSupportScore(event.target.value)}
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
                        <Link to="/understanding">
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

export default SupportView;
