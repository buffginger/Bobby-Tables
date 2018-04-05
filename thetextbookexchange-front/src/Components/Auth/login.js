import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

class Login extends Component {
    
     constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
     }

     onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state;
        const cookies = new Cookies();
        axios.post('http://localhost:8000/api/login', {
            email, 
            password
          })
          .then(response=> {
            this.setState({err: false});
            cookies.set('TBEAuthToken', response.data.access_token, { path: '/' }); // Store auth token into a cookie.
            this.props.history.push("/home");
          })
          .catch(error=> {
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
     }

	render() {
        
        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
	    return (
            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div id="loginDiv"  class="logRegDiv">
                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                        {error !== undefined && <div className={name} role="alert">{msg}</div>}
                    </div>  
                    <form class="form-signin" method="POST" onSubmit={this.onSubmit.bind(this)}>
                        <h2 class="form-signin-heading">Please sign in</h2>
                        <input type="email" id="email" ref="email" class="form-control" name="email" onChange={this.onChange.bind(this)} placeholder="Email address" required="" autofocus=""/>
                        <br/>
                        <input type="password" id="password" ref="password" class="form-control" name="password" onChange={this.onChange.bind(this)} placeholder="Password" required=""/>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
            // <div>
            //     <div className="container-fluid">
            //         <div className="row">
            //             <div className="col-md-8 col-md-offset-2">
            //                 <div className="panel panel-default">
            //                     <div className="panel-heading">Login</div>
            //                     <div className="panel-body">   
            //                         <div className="col-md-offset-2 col-md-8 col-md-offset-2">
            //                             {error !== undefined && <div className={name} role="alert">{msg}</div>}
            //                         </div>  
            //                         <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
            //                             <div className="form-group">
            //                                 <label for="email" className="col-md-4 control-label">E-Mail Address</label>

            //                                 <div className="col-md-6">
            //                                     <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
            //                                 </div>
            //                             </div>

            //                             <div className="form-group">
            //                                 <label for="password" className="col-md-4 control-label">Password</label>

            //                                 <div className="col-md-6">
            //                                     <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
            //                                 </div>
            //                             </div>

            //                             <div className="form-group">
            //                                 <div className="col-md-6 col-md-offset-4">
            //                                     <div className="checkbox">
            //                                         <label>
            //                                             <input type="checkbox" name="remember" /> Remember Me
            //                                         </label>
            //                                     </div>
            //                                 </div>
            //                             </div>

            //                             <div className="form-group">
            //                                 <div className="col-md-8 col-md-offset-4">
            //                                     <button type="submit" className="btn btn-primary">
            //                                         Login
            //                                     </button>

            //                                     <li className="btn btn-link">
            //                                         <Link to = "forgotpassword">Forgot Your Password?</Link>
            //                                     </li>
            //                                 </div>
            //                             </div>
            //                         </form>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div> 
	   );
    }
}

export default Login;