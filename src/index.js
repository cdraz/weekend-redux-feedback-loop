import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Create reducer for feedback
const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}, action) => {
    switch (action.type) {
        case 'SUBMIT_FEEDBACK':
            console.log('in SUBMIT_FEEDBACK');
            return action.payload;
        case 'RESET_FEEDBACK':
            console.log('Resetting redux store...');
            return {
                feeling: '',
                understanding: '',
                support: '',
                comments: ''
            }
        default:
            return state;
    }
}

// Create redux store
const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
