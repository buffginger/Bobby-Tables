import React from 'react'
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' // Adds routing functions to App.
import logo from '../../Assets/Images/bookLogo.png';

// Homepage component/module.
class Sidebar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="sidenav">
                        <a href="/"><img className="px-5 img-fluid" src={logo} alt="TextbookExchange Logo"/></a>
                        <h4 id="sideBarTitle">The Textbook Exchange</h4>
                        <ul className="nav nav-pills flex-column" id="sideBarItemContainer">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/account">Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mybooks">My Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/settings">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
}

// Export this module to be imported from App.js.
export default Sidebar