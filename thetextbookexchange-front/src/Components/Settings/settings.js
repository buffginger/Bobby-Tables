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
                        idForPush: ''
                    };


                    const cookies = new Cookies();
                    axios.get('http://localhost:8000/api/userInfo', {
                        headers: {
                            Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                        }
                    })
                    .then(res => {
                        this.setState({idForPush: res.data.id});
                        console.log(res.data)
                    })
                    .catch(function (error) {
                    console.log(error);
                    alert('error:' + error);
                    });

            this.handleChange1 = this.handleChange1.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
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
      handleSubmit(event) {
        
        var idTemp = this.state.idForPush;
        var nameTemp = this.state.keyboardInput1;
        alert(idTemp + '    ' + nameTemp);
    
        axios.post('http://localhost:8000/api/updateName', {
            id: idTemp,
            name: nameTemp
          })
          .then(response=> {
            alert('Tried to update name');
          })
          .catch(error=> {
            alert('There was an error');
          });
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
                                        </div>

                                        <div class="form-group">
                                            <b><label for="userEmail">Change Email</label></b>
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