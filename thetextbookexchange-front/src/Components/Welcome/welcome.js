import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import library from '../../Assets/Images/library.jpg';


class Welcome extends Component {

  constructor(props){
      super(props);
  } 
  
  logout(e){
       e.preventDefault();
       axios.post('https://api.thetextbookexchange.club/api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

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
            <div class="w3-display-middle wsNoWrp lgnReg">
              <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity lgnReg"><a href="/login">LOGIN</a></span>
              <br/><br/>
              <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity lgnReg"><a href="/register">REGISTER</a></span>
            </div>
        </div>
    )
  }

}

export default  withRouter(Welcome)