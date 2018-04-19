import React from 'react';
import axios from 'axios';
//import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';




// Homepage component/module.
class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  keyboardInput1: '',
                        keyboardInput2: '',
                        keyboardInput3: '',
                        keyboardInput4: '',
                        keyboardInput5: '',
                        idForPush: ''
                    };


                    const cookies = new Cookies();
                    axios.get('https://api.thetextbookexchange.club/api/userInfo', {
                        headers: {
                            Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                        }
                    })
                    .then(res => {
                        this.setState({idForPush: res.data.id});
                        //console.log(res.data)
                    })
                    .catch(function (error) {
                    console.log(error);
                    alert('error:' + error);
                    });
                    //alert('ready');
            this.handleChange1 = this.handleChange1.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
            this.handleChange3 = this.handleChange3.bind(this);
            this.handleChange4 = this.handleChange4.bind(this);
            this.handleChange5 = this.handleChange5.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            //this.updateEmail = this.updateEmail.bind(this);
      }

      handleChange1(event) {
        this.setState({keyboardInput1: event.target.value}); // this must remain to be value
        //console.log('Input is KI1:' + this.state.keyboardInput1);
      }

      handleChange2(event) {
        this.setState({keyboardInput2: event.target.value}); // this must remain to be value
        //console.log('Input is KH2:' + this.state.keyboardInput2);
      }
      handleChange3(event) {
        this.setState({keyboardInput3: event.target.value}); // this must remain to be value
        //console.log('Input is KH2:' + this.state.keyboardInput2);
      }
      handleChange4(event) {
        this.setState({keyboardInput4: event.target.value}); // this must remain to be value
        //console.log('Input is KH2:' + this.state.keyboardInput2);
      }
      handleChange5(event) {
        this.setState({keyboardInput5: event.target.value}); // this must remain to be value
        //console.log('Input is KH2:' + this.state.keyboardInput2);
      }
handleSubmit(event) {

        var idTemp = this.state.idForPush;
        var nameTemp = this.state.keyboardInput1;
        var emailTemp = this.state.keyboardInput2;
        var passwordTemp = this.state.keyboardInput3; // for password
        var passwordChecker = this.state.keyboardInput4;
        var emailChecker = this.state.keyboardInput5;
        //alert(idTemp + '    ' + nameTemp);
        const cookies = new Cookies();
        //var json;
        
        if(nameTemp != null){
        const data = {
            id: idTemp,//this.state.idForPush,
            name: nameTemp//this.state.keyboardInput1,
        }

        axios.post('https://api.thetextbookexchange.club/api/updateName', data, {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken')
                    }       
        })
          .then(response=> {
            //json = JSON.parse(response.data);
            //console.log(response.data);
            //alert(json);
            //alert(response.data);
            //console.log('It did something');
            //alert('Tried to update name');
          })
          .then(json =>{
              //alert('nothing is here');
          })
          .catch(function (error) {
            console.log(error);
            //alert('error:' + error);
            });
            //alert('This is after the post request');
        }


        if(emailTemp != null){
            if(emailChecker != null){
                if(emailChecker === emailTemp){
                    const data = {
                        id: idTemp,//this.state.idForPush,
                        email: emailTemp//this.state.keyboardInput1,
                    }
            
                    axios.post('https://api.thetextbookexchange.club/api/updateEmail', data, {
                                headers: {
                                    Authorization: 'Bearer ' + cookies.get('TBEAuthToken')
                                }       
                    })
                      .then(response=> {
                        //json = JSON.parse(response.data);
                        //console.log(response.data);
                        //alert(json);
                        //alert(response.data);
                        //console.log('It did something');
                        //alert('Tried to update name');
                      })
                      .then(json =>{
                          //alert('nothing is here');
                      })
                      .catch(function (error) {
                        console.log(error);
                        //alert('error:' + error);
                        });
                }
                else{
                    alert('ERROR: There was an error updating your email. \n '+
                     'REASON: Emails do not match.  \n' +
                'These issues we take very seriously, please contact admin at \'admin@thetextbookexchange.club\'');
                }
            }
            else{
                alert('ERROR: There was an error updating your email. \n '+
                     'REASON: Emails do not match.  \n' +
                'These issues we take very seriously, please contact admin at \'admin@thetextbookexchange.club\'');
            }
        }
        else{
            alert('ERROR: There was an error updating your email. \n '+
                     'REASON: Emails do not match.  \n' +
                'These issues we take very seriously, please contact admin at \'admin@thetextbookexchange.club\'');
        }


        /*if(emailTemp != null){
            const data = {
                id: idTemp,//this.state.idForPush,
                email: emailTemp//this.state.keyboardInput1,
            }
    
            axios.post('http://localhost:8000/api/updateEmail', data, {
                        headers: {
                            Authorization: 'Bearer ' + cookies.get('TBEAuthToken')
                        }       
            })
              .then(response=> {
                //json = JSON.parse(response.data);
                //console.log(response.data);
                //alert(json);
                //alert(response.data);
                //console.log('It did something');
                //alert('Tried to update name');
              })
              .then(json =>{
                  //alert('nothing is here');
              })
              .catch(function (error) {
                console.log(error);
                //alert('error:' + error);
                });
        }*/


        if(passwordTemp !== null && passwordTemp != '' && passwordTemp != undefined){
            if(passwordChecker !== null && passwordChecker != '' && passwordChecker != undefined){
                if(passwordChecker === passwordTemp){
                    alert('Password is being changed to: _' + passwordTemp + '_');
                    const data = {
                        id: idTemp,//this.state.idForPush,
                        password: passwordTemp//this.state.keyboardInput1,
                    }
            
                    axios.post('https://api.thetextbookexchange.club/api/updatePSWRD', data, {
                                headers: {
                                    Authorization: 'Bearer ' + cookies.get('TBEAuthToken')
                                }       
                    })
                    .then(response=> {
                        //json = JSON.parse(response.data);
                        //console.log(response.data);
                        //alert(json);
                        //alert(response.data);
                        //console.log('It did something');
                        //alert('Tried to update name');
                    })
                    .then(json =>{
                        //alert('nothing is here');
                    })
                    .catch(function (error) {
                        console.log(error);
                        //alert('error:' + error);
                        });
                }
                else{
                    alert('ERROR: There was an error updating your password. \n '+
                     'REASON: Passwords do not match.  \n' +
                'These issues we take very seriously, please contact admin at \'admin@thetextbookexchange.club\'');
                }
            }
            else{
                alert('ERROR: There was an error updating your password. \n '+
                'REASON: Passwords do not match.  \n' +
                'These issues we take very seriously, please contact admin at \'admin@thetextbookexchange.club\'');
            }
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">User Settings</h1>
                                <p className="lead" style={{"padding-left": 15}}> Double Check All Changes Before
                                    Continuing
                                <hr/>

                                <div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <b><label for="changePassword">Change User Name</label></b>
                                            <input type="text" class="form-control" id="usernamechange"
                                                   placeholder="Enter New User Name" value={this.state.keyboardInput1} onChange={this.handleChange1}/>
                                        </div><br/>



                                        
                                        <div class="form-group">
                                            <b><label for="userPassword">Update Password</label></b>
                                            <small id="emailInput" class="form-text text-muted"> Enter New Password
                                            </small>
                                            <input type="password" class="form-control" id="" aria-describedby="passwordHelp"
                                                     value={this.state.keyboardInput4} onChange={this.handleChange4}/>
                                        
                                        <small id="emailInput" class="form-text text-muted"> Verify New Password
                                            </small>
                                            <input type="password" class="form-control" id="" aria-describedby="passwordHelp"
                                                     value={this.state.keyboardInput3} onChange={this.handleChange3}/>
                                        </div><br/>
                                        
                                        
                                        
                                        
                        
                                        <div class="form-group">
                                            <b><label for="userEmail">Update Email</label></b>
                                            <small id="emailInput" class="form-text text-muted"> Enter New Email
                                            </small>
                                            <input type="email" class="form-control" id="" aria-describedby="emailHelp"
                                                   placeholder="Enter new email"  value={this.state.keyboardInput5} onChange={this.handleChange5}/>
                                            <small id="emailInput" class="form-text text-muted">Verify New Email
                                            </small>
                                            <input type="email" class="form-control" id="" aria-describedby="emailHelp"
                                                   placeholder="Enter new email"  value={this.state.keyboardInput2} onChange={this.handleChange2}/>
                                            <small id="emailInput" class="form-text text-muted">We'll never share your
                                                email with anyone else.
                                            </small>
                                        </div>
                                        

                                        <br/>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                               
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Settings

/*
<div class="form-group">
                                            <b><label for="changePassword">Change Password</label></b>
                                            <input type="password" class="form-control" id="confirmPW"
                                                   placeholder="Enter New Password" value={this.state.keyboardInput1} onChange={this.handleChange1}/>
                                        </div>
                                        */