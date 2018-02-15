import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './SideBarCSS.css';
//import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Account = () => (
  <div>
    <h2>Account</h2>
  </div>
)

const MyBooks = () => (
  <div>
    <h2>My Books</h2>
  </div>
)

const Settings = () => (
  <div>
    <h2>Settings</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>this is a rather boring page</p>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <div id="mySidenav" class="sidenav">
        <a href="/">Home</a>
        <a href="/account">Account</a>
        <a href="/mybooks">My Books</a>
        <a href="/settings">Settings</a>
        <a href="/about">About</a>
      </div>
      <div class="mainBody App-header">
        <Route exact path="/" component={Home}/>
        <Route path="/account" component={Account}/>
        <Route path="/mybooks" component={MyBooks}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/about" component={About}/>
      </div>
    </div>
  </Router>
)
export default BasicExample
