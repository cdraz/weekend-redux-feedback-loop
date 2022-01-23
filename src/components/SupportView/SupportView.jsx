import { Link } from 'react-router-dom';


function SupportView() {
    return (
        <>
            <h3>Support</h3>
            <Link to="/comments">
                <button>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default SupportView;
