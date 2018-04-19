import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import library from '../../Assets/Images/library.jpg';


class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    logout(e) {
        e.preventDefault();
        axios.post('https://api.thetextbookexchange.club/api/logout', {
            headers: {
                Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
            }
        })
            .then(response => {
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleClick(e) {

        e.preventDefault();
        this.props.history.push('/');

    }

    render() {

        // If the user is logged in
        if (this.props.link) {
            return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#" onClick={this.handleClick.bind(this)}></a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <a className="navbar-brand" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a>
                        </ul>
                    </div>
                </nav>
            )
        }

        // If the user is not logged in
        return (
            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div class="w3-display-middle lgnReg text-center welcomeMsg">
                    <h1 className="whiteText">Welcome to the Textbook Exchange</h1><br/>
                    <a href="/login"><button class="btn btn-lg btn-primary btn-block wlcmButtons">LOGIN</button></a>
                    <br/>
                    <a href="/register"><button class="btn btn-lg btn-primary btn-block wlcmButtons">REGISTER</button></a>
                </div>
            </div>
        )
    }

}

export default withRouter(Welcome)