import React from 'react';
//import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';


// Homepage component/module.
class Home extends React.Component {
// additional classes go here


    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid jumbotron-minimalpadding">
                            <div className="container-minimal">
                            
                            <h1 className="display-1" style={{"paddingLeft": 15}}>User Settings</h1>
                            <p className="lead" style={{"paddingLeft": 25}}> <b>Welcome back <i>(user name)</i>!</b></p> 
                                <hr/> 

                                
                                <div className="container-minimal">
                                        <div className="card" >
                                            <div className="card-body">
                                                
                                               
                                                        <b>User Name:</b>   (databse entry)  <br/>
                                                        <b>Current Email:</b> (database entry) <br/>
                                                        <b>Contact Number:</b> (database entry) <br/>
                                                        <b>Seller Rating:</b>  (database entry) <br/>
                                                        <b>Update Location:</b> (link to update Google API location for account) <br/>
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