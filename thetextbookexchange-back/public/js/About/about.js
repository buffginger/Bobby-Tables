import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class About extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid">
                            <h1 className="display-1">About Us</h1>
                            <h2>We built The Textbook Exchange to help students continue their education on a
                                budget</h2>
                            <p>
                                Every student knows a new semester means buying new textbooks. Unfortunately, textbooks
                                aren't cheap.
                                That's why we created an application that allows students to buy and sell textbooks
                                locally with other students.
                            </p>
                            <h2>Who we are</h2>
                            <p>
                                We are a group of college students with the goal to disrupt the textbook market
                                monopoly.
                                We believe promoting the re-usability of textbooks will help the wallets of college
                                students everywhere.
                            </p>
                            <h2>Creators</h2>
                            <div>
                                Matthew Tran, Austin Nielsen, Zach Garvis, Ethan Anderson
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default About