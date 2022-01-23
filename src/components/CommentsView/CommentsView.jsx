import { Link } from 'react-router-dom';

function CommentsView() {
    return (
        <>
        <h3>Comments</h3>
        <Link to="/review">
            <button>
                Review
            </button>
        </Link>
        </>
    )
}

export default CommentsView;
