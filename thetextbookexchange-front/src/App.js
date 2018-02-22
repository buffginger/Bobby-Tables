/* *********************** GLOBAL IMPORTS *********************** */
import React from 'react';
import './Styles/App.css'; // Global CSS file (not bootstrap related).
import './Styles/Sidebar.css'; // Global CSS file (not bootstrap related).
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom' // Adds routing functions to App.
/* *********************** END GLOBAL IMPORTS *********************** */

/* *********************** COMPONENTS *********************** */
import NotFound from './Components/NotFound/notfound'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Settings from './Components/Settings/settings'
import SampleBook from './Components/ViewBook/viewbook'
/* *********************** END COMPONENTS *********************** */

/* *********************** MAIN EXPORT *********************** */
// Main (global) layout that client sees when requesting index (loads public/index.html).
// Loads other components/routes on top.
const AppMain = () => (
    <Router>
        <div id="bodyDiv">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/user_settings" component={Settings}/>
                <Route path="/samplebook" component={SampleBook}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)
export default AppMain
