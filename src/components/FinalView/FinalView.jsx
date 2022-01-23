import { Link } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function RestartView() {
    return (
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5" sx={{ margin: 5 }}>
                    Thank you!
                </Typography>
                <Typography variant="h7" sx={{ margin: 5 }}>
                    Your feedback is greatly appreciated.
                </Typography>
                <CardActions sx={{ marginTop: 3 }}>
                    <Link to="/">
                        <Button variant="contained">
                            Take Survey Again
                        </Button>
                    </Link>
                </CardActions>  
            </CardContent>
        </Card>
    )
}

export default RestartView;