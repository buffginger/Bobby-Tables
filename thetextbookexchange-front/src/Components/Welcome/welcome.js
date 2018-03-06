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
       axios.post('http://localhost:8000/api/logout')
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
         <div class="lib w3-display-container w3-opacity-min" id="home">
         <img src={library} alt="Library wallpaper"/>
            <div class="w3-display-middle">
              <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"><span class="w3-hide-small"></span> LOGO</span>
            </div>
        </div>

/*
              <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
          </div>
        </div>
      */
    )
  }

}

export default  withRouter(Welcome)