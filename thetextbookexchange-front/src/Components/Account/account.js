import React from 'react';
import axios from 'axios';
//import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


// Homepage component/module.
//class Home extends React.Component {
// additional classes go here



class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {nameRet: '',
                      emailRet: ''
                    };
       
                    const cookies = new Cookies();
                    var temp;
                    //var json;
                    //var nameRet;
                    //var emailRet;
                    
            
                    axios.get('http://localhost:8000/api/userInfo', {
                        headers: {
                            Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                        }
                    })
                    .then(res => {
                         
                        //json = JSON.parse(res.data);
                        console.log(res.data)
                        //nameRet = res.data.name;
                        //emailRet  = res.data.email;
                        //alert('Name:' + nameRet);
                        
                        
                        this.setState({nameRet: res.data.name});
                        temp = this.state.nameRet;
                        alert('Name using setstate:' + this.state.nameRet);
    
                        
                        
                    })
                    .catch(function (error) {
                    console.log(error);
                    alert('error:' + error);
                    });
        
        //this.getUserInfo = this.getUserInfo.bind(this); // this right now just shows what was entered
        //componentDidMount;
        
      }
    
      getUserInfo(event) {
                const cookies = new Cookies();
                //var json;
                //var nameRet;
                //var emailRet;
                
        
                axios.get('http://localhost:8000/api/userInfo', {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                    }
                })
                .then(res => {
                     
                    //json = JSON.parse(res.data);
                    console.log(res.data)
                    //nameRet = res.data.name;
                    //emailRet  = res.data.email;
                    //alert('Name:' + nameRet);

                    this.setState({nameRet: res.data.name});
                    alert('Name:' + this.state.nameRet);

                    
                    
                })
                .catch(function (error) {
                console.log(error);
                alert('error:' + error);
                });
            
                event.preventDefault();
            }
          
            

            /*componentDidMount() {
                
                const cookies = new Cookies();
                var json;
                var nameRet;
                var emailRet;
                
        
                axios.get('http://localhost:8000/api/userInfo', {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                    }
                })
                .then(res => {
                     
                    //json = JSON.parse(res.data);
                    console.log(res.data)
                    nameRet = res.data.name;
                    emailRet  = res.data.email;
                    alert('Name:' + nameRet);

                    

                    
                    
                })
                .catch(function (error) {
                console.log(error);
                alert('error:' + error);
                });
            }*/

            /*componentDidMount() { // try two does work, just doesnt post stuff in page
                
                const cookies = new Cookies();
                //var json;
                //var nameRet;
                //var emailRet;
                
        
                axios.get('http://localhost:8000/api/userInfo', {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                    }
                })
                .then(res => {
                     
                    //json = JSON.parse(res.data);
                    console.log(res.data)
                    //nameRet = res.data.name;
                    //emailRet  = res.data.email;
                    //alert('Name:' + nameRet);
                    

                    this.setState({nameRet: res.data.name});
                    alert('Name using setstate:' + this.state.nameRet);

                    
                    
                })
                .catch(function (error) {
                console.log(error);
                alert('error:' + error);
                });
                
            }*/
            
            
    

    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid jumbotron-minimalpadding">
                            <div className="container-minimal">
                            
                            <h1 className="display-1" style={{"paddingLeft": 15}}>Account Information</h1>
                            <p className="lead" style={{"paddingLeft": 25}}> <b>Welcome back <i>(user name)</i>!</b></p> 
                                <hr/> 

                                
                                <div className="container-minimal">
                                        <div className="card" >
                                            <div className="card-body">
                                                
                                               
                                                        <b>User Name:</b>   (database entry)  <br/>
                                                        <b>Current Email:</b> (database entry) <br/>
                                                        <b>Contact Number:</b> (database entry) <br/>
                                                        <br/>
                                                        <a  href="/user_settings"><i className="fa fa-gear"></i><b>Update Information</b></a>
                                                
                                            </div>
                                            <br/>
                                        </div>
                            </div>                       



                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Home