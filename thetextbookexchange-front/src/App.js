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
import SellBook from './Components/SellBook/sellbook'
import Register from './Components/Auth/register'
import Login from './Components/Auth/login'
import Welcome from './Components/Welcome/welcome'
//import TableRow from './Components/TableRow/tablerow'
import SampleBook from './Components/ViewBook/viewbook'
import Account from './Components/Account/account'
import MyBooks from './Components/MyBooks/mybooks'
/* *********************** END COMPONENTS *********************** */

/* *********************** MAIN EXPORT *********************** */
// Main (global) layout that client sees when requesting index (loads public/index.html).
// Loads other components/routes on top.
const AppMain = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route exact path="/" component={Welcome}/>
                <Route path="/account" component={Account}/>
                <Route path="/about" component={About}/>
                <Route path="/user_settings" component={Settings}/>
                <Route path="/sell" component={SellBook}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/mybooks" component={MyBooks}/>
                
                <Route path="/samplebook" component={SampleBook}/>
                <Route path="/samplebook:handle" component={SampleBook}/>

                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)
export default AppMain