import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-1">Homepage</h1>
                            <p className="lead">This is the new layout for our pages. Please follow project structure
                                conventions. If you have any questions let me know. Edit me in
                                src/Components/Home/home.js</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Home