import { Link } from 'react-router-dom';

function FeelingView() {
    return (
        <>
            <h3>Feeling</h3>

            <Link to="/understanding">
                <button>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default FeelingView;
