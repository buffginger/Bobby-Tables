import React, { Component } from 'react';
import logo from './bookLogo.png';
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
    <p>Welcome to The Textbook Exchange</p>
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
        <a href="/"><img class="sideBarLogo" src={logo}/></a>
        <center>
          <h4><a href="/" id="sideBarTitle">The Textbook Exchange</a></h4>
        </center>
        <hr/>
        <a href="/"><i class="fa fa-home"></i>&#8195;Home</a>
        <a href="/account"><i class="fa fa-user"></i>&#8195;&#8195;Account</a>
        <a href="/mybooks"><i class="fa fa-book"></i>&#8195;My Books</a>
        <a href="/settings"><i class="fa fa-gear"></i>&#8195;Settings</a>
        <a href="/about"><i class="fa fa-question"></i>&#8195;&#8195;About</a>
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
