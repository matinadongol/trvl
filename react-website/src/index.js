import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/ScrollTotop';

ReactDOM.render(
  <Router>
    <ScrollToTop />
     <App />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
