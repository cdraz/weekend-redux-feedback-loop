import { Link } from 'react-router-dom';

// Import MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function WelcomeView() {
    return (
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 700, margin: 'auto' }}>
            <CardContent>
                <Typography variant="h5" sx={{ margin: 5 }}>
                    Welcome!
                </Typography>
                <Typography variant="h7" sx={{ margin: 'auto' }}>
                    This is a quick survey to provide feedback
                    about how today went for you. All answers are
                    anonymous so please respond honestly.
                </Typography>
                <CardActions sx={{ marginTop: 3 }}>
                    <Link to="/feeling">
                        <Button variant="contained">
                            Begin
                        </Button>
                    </Link>
                </CardActions>  
            </CardContent>
        </Card>

    )
}

export default WelcomeView;