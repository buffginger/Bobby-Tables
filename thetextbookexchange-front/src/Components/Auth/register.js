import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            password_confirmation: '',
        }
     }

    onSubmit(e){
        e.preventDefault();
        const {name, email, password, password_confirmation} = this.state ;
        axios.post('https://api.thetextbookexchange.club/api/register', {
            name,
            email,
            password,
            password_confirmation
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("/") ;
          })
          .catch(error=> {
            this.refs.name.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.refs.confirm.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (  
            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div id="registerDiv" class="logRegDiv">
                    <form class="form-signin" method="POST" onSubmit={this.onSubmit.bind(this)}>
                        <h2 class="form-signin-heading">Register</h2>
                        <input type="text" id="name" ref="name" class="form-control" name="name" onChange={this.onChange.bind(this)} placeholder="Name" required="" autofocus=""/>
                        <br/>
                        <input type="email" id="email" ref="email" class="form-control" name="email" onChange={this.onChange.bind(this)} placeholder="Email address" required=""/>
                        <br/>
                        <input type="password" id="password" ref="password" class="form-control" name="password" onChange={this.onChange.bind(this)} placeholder="Password" required=""/>
                        <br/>
                        <input type="password" id="password-confirm" ref="confirm" class="form-control" name="password_confirmation" onChange={this.onChange.bind(this)} placeholder="Confirm Password" required=""/>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
                <div id="credentialsRegError" className="col-md-offset-2 col-md-8 col-md-offset-2 credentialsError">
                    {error !== undefined && <div className={name} role="alert">{msg}</div>}
                </div>  
            </div>
        );
    }
}

export default Register