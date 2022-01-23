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

// Import MUI components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Declare component function
function App() {

  // Set up MUI theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688'
      },
      overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          }
        }
      }
    }
  })

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Paper elevation={8} sx={{
            minwidth: 500,
            maxWidth: 1000,
            margin: 'auto',
            marginTop: 5,
            paddingTop: 3,
            paddingBottom: 10
          }}>
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
        </Paper>
      </ThemeProvider>   
    </div>
  );
}

export default App;
