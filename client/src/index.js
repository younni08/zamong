import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import './index.css';
import './tablet.css';
import './pc.css';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Root />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
