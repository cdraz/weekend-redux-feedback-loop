import { Link } from 'react-router-dom';

function ReviewView() {
    return (
        <>
        <h3>Review</h3>
        <Link to="/final">
            <button>
                Submit
            </button>
        </Link>
        </>
    )
}

export default ReviewView;
