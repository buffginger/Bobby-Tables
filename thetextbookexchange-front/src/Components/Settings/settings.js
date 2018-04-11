import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';


// side bar has been edited
// app.js has been edited
// new file has been made under ./src/Components/Settings/settings.js
// edited the sidebar nav to scroll *redacted


// Homepage component/module.
class Settings extends React.Component {
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
                                    <form action="/user_setting_change.js">
                                        <div class="form-group">
                                            <b><label for="changeNumber">Change Number</label></b>
                                            <input type="text" class="form-control input-large bfh-phone"
                                                                       data-country="US" id="currentNum"
                                                                       placeholder="Current Number"/>
                                            <input type="text" class="form-control input-large bfh-phone"
                                                                   data-country="US" id="newNum"
                                                                   placeholder="New Number"/>
                                            <input type="text" class="form-control input-large bfh-phone"
                                                                       data-country="US" id="confirmNum"
                                                                       placeholder="Confirm Number"/>
                                        </div>

                                        <div class="form-group">
                                            <b><label for="changePassword">Change Password</label></b>
                                            <input type="password" class="form-control" id="currentPW"
                                                   placeholder="Current Password"/>
                                            <input type="password" class="form-control" id="newPW"
                                                   placeholder="New Password"/>
                                            <input type="password" class="form-control" id="confirmPW"
                                                   placeholder="Confirm New Password"/>
                                        </div>

                                        <div class="form-group">
                                            <b><label for="userEmail">Change Email</label></b>
                                            <input type="email" class="form-control" id="" aria-describedby="emailHelp"
                                                   placeholder="Enter new email"/>
                                            <small id="emailInput" class="form-text text-muted">We'll never share your
                                                email with anyone else.
                                            </small>
                                        </div>
                                        

                                        <b>Subscribe To Email Alerts?</b><br/>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="checkBox1" value="y"/>
                                            <label class="form-check-label" for="yesBox">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkBox" id="checkbox2" value="n"/>
                                            <label class="form-check-label" for="noBox">No</label>
                                        </div>
                                        <br/><br/>
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