// Import Libraries
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// Import CSS
import './App.css';

// Import Components
import AdminView from '../AdminView/AdminView';
import CommentsView from '../CommentsView/CommentsView';
import FeelingView from '../FeelingView/FeelingView';
import Header from '../Header/Header';
import FinalView from '../FinalView/FinalView';
import ReviewView from '../ReviewView/ReviewView';
import SupportView from '../SupportView/SupportView';
import UnderstandingView from '../UnderstandingView/UnderstandingView';
import WelcomeView from '../WelcomeView/WelcomeView';

// Declare component function
function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path="/">
          <WelcomeView />
        </Route>
        <Route exact path="/feeling">
          <FeelingView />
        </Route>
        <Route exact path="/understanding">
          <UnderstandingView />
        </Route>
        <Route exact path="/support">
          <SupportView />
        </Route>
        <Route exact path="/comments">
          <CommentsView />
        </Route>
        <Route exact path="/review">
          <ReviewView />
        </Route>
        <Route exact path="/final">
          <FinalView />
        </Route>
        <Route exact path="/admin">
          <AdminView />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
