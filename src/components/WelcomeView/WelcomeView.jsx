import { Link } from 'react-router-dom';

function WelcomeView() {
    return (
        <>
        <h3>Welcome!</h3>

        <Link to="/feeling">
            <button>
                Start
            </button>
        </Link>
        </>
    )
}

export default WelcomeView;