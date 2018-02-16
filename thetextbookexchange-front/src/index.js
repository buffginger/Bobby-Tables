import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import { render } from 'react-dom';*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

