import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function ReviewView() {
    // Store access, dispatch hook, and history hook
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('Current feedback is: ', feedback);

    // Declare onSubmit function
    const onSubmit = () => {
        console.log('in onSubmit');

        // Confirm submittal
        let confirm = window.confirm('Are you sure you would like to submit your feedback?');

        // Stop onSubmit if cancelled
        if (!confirm) {
            console.log('Submit cancelled');
            return;
        }

        // Validate that all required scores are provided
        if (!feedback.feeling || !feedback.understanding || !feedback.support) {
            window.alert('Missing a required score or provided score is invalid. Please go back and ensure all required scores are provided and valid, then try again.')
            return;
        }

        // POST feedback if confirmed and client side validation is passed
        console.log('Submitting final feedback: ', feedback);
        axios.post('/feedback', feedback)
        .then( res => {
            console.log('POST /feedback success', res.data);
            // Clear redux store to prepare for next submission
            dispatch({
                type: 'RESET_FEEDBACK'
            });
        })
        .catch( err => {
            console.error('POST /feedback failed', err);
            if (err === 500) {
                window.alert('Submission failed -- Error with server. Please try again later.');
            }
            if (err === 400) {
                window.alert('Submission failed. Please ensure all required scores are provided.');
            }
        });

        // Navigate to next page
        history.push('/final');
    }

    return (
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent sx={{ }}>
                <h3>Review</h3>
                <TableContainer sx={{ margin: 5 }}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">Feelings</TableCell>
                                <TableCell align="left">{feedback.feeling}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Understanding</TableCell>
                                <TableCell align="left">{feedback.understanding}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Support</TableCell>
                                <TableCell align="left">{feedback.support}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Comments</TableCell>
                                <TableCell align="left">{feedback.comments}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <CardActions sx={{ marginTop: 3 }}>
                    <Button variant="contained" onClick={onSubmit}>
                        Submit
                    </Button>
                    <Link to="/comments">
                        <Button variant="text" type="button">
                            Back
                        </Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ReviewView;
