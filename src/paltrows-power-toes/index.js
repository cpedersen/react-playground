/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './paltrows-power-toes/App';

ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,
  document.getElementById('root')
);

