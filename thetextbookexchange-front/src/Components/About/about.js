import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class About extends React.Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-1">About Page</h1>
                            <p className="lead">This is the new layout for our pages. Please follow project structure conventions. If you have any questions let me know. Edit me in src/Components/About/about.js</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default About