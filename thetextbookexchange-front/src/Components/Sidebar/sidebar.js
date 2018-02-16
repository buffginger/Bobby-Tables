import React from 'react'
import logo from '../../Assets/Images/bookLogo.png';

// Homepage component/module.
class Sidebar extends React.Component {
    render() {
        return (
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
        );
    }
}

// Export this module to be imported from App.js.
export default Sidebar