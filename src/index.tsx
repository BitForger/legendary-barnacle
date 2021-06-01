import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {AppWithRouter} from './App';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AppWithRouter />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
