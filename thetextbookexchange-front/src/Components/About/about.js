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
                    <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-1" style={{"margin-left" : 15}}>About Us</h1>
                        <div className="aboutcontainer"> 
                            <h2>We built The Textbook Exchange to help students continue their education on a budget</h2>
                            <div className="aboutPar1" >
                            Every student knows a new semester means buying new textbooks. Unfortunately, textbooks aren't cheap.
                            That's why we created an application that allows students to buy and sell textbooks locally with other students.
                            </div>
                            <h2 style={{"margin-top" : 20}}>Who we are</h2>
                            <div>
                            We are a group of college students with the goal to disrupt the textbook market monopoly.
                            We believe promoting the re-usability of textbooks will help the wallets of college students everywhere. 
                            </div>
                            <h2 style={{"margin-top" : 20}}>Creators</h2>
                            <div style={{"margin-top" : 20}}>
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