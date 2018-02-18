import React from 'react'
import logo from '../../Assets/Images/bookLogo.png';

// Homepage component/module.
class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <a href="/"><img className="px-5 img-fluid" src={logo} alt="TextbookExchange Logo"/></a>
                <h4 id="sideBarTitle"><a href="/">The Textbook Exchange</a></h4>
                <ul className="nav nav-pills flex-column" id="sideBarItemContainer">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><i className="fa fa-home"></i>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/account"><i className="fa fa-user"></i>Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/mybooks"><i className="fa fa-book"></i>My Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/user_settings"><i className="fa fa-gear"></i>Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><i className="fa fa-question"></i>About</a>
                    </li>
                </ul>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Sidebar