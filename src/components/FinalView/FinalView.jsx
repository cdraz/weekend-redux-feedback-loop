import { Link } from 'react-router-dom';

function RestartView() {
    return (
        <>
        <h3>Thank you!</h3>
        <Link to="/welcome">
            <button>
                Restart
            </button>
        </Link>
        </>
    )
}

export default RestartView;