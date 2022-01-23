import { Link } from 'react-router-dom';

function FeelingView() {
    return (
        <>
            <h3>How are you feeling today?</h3>
            <input 
                id="feeling_score"
                name="feeling"
                type="number"
            />
            <label for="feeling_score">Feeling?</label>
            <br></br>
            <Link to="/understanding">
                <button>
                    Continue
                </button>
            </Link>
        </>
    )
}

export default FeelingView;
