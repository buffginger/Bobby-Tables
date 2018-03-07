import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class ViewBook extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Tumbeasts - Special Edition | $5</h1>
                                <p className="lead" style={{"padding-left": 15}}>

                                    <div id="carousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#carousel" data-slide-to="1"></li>
                                            <li data-target="#carousel" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" style={{"width": 300, "height": 600}}
                                                     src="http://assets.s4rb-systems.co.uk/images/tumbeasts/sign-2.png"
                                                     alt="Slide One"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img class="d-block w-100" style={{"width": 300, "height": 600}}
                                                     src="https://ih0.redbubble.net/image.55998815.1905/mwo%2C187x204%2Cipad_2_snap-pad%2C210x230%2Cf8f8f8.lite-1.jpg"
                                                     alt="Slide Two"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img class="d-block w-100" style={{"width": 300, "height": 600}}
                                                     src="http://assets.s4rb-systems.co.uk/images/tumbeasts/run-2.png"
                                                     alt="Third slide"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carousel" role="button"
                                           data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carousel" role="button"
                                           data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>

                                    <hr/>

                                    <div style={{"padding-left": 15}} div class="book-img">
                                        <h2> Item Description </h2>
                                        <p>Hello All! I am selling the tumbeasts book - as the title specifies. The
                                            tumbeasts within vary in emotions and mental stability. They are collected
                                            from all over the internet and therefore are very unique and also compounded
                                            into a special edition, just for you! The book is 5$. What a bargain.
                                        </p>

                                        <h2> Item Details </h2>
                                        <div>
                                            <ul>
                                                <li><b>ISBN-10:</b> <i> 1000123211 </i></li>
                                                <li><b>ISBN-13:</b> <i> 4021000123211 </i></li>
                                                <li><b>Publisher:</b> <i> Unknown </i></li>
                                                <li><b>Author(s):</b> <i> Unknown </i></li>
                                                <li><b>Edition:</b> <i> 10th </i></li>
                                                <li><b>Copyright Year:</b> <i> 2018 </i></li>
                                                <li><b>Dimension(s):</b> <i> Unknown </i></li>
                                                <li><b>Language:</b> <i> English </i></li>
                                                <li><b>Topic:</b> <i> Computer Science </i></li>
                                                <li><b>Spine Type:</b> <i> Hard-Cover/Paper-Back </i></li>
                                                <li><b>Appoximate Pages:</b> <i> 700^56 </i></li>
                                            </ul>
                                        </div>

                                        <h2> Item Condition </h2>
                                        <p> These tumbeasts are in great condition, spare the second which is a bit
                                            pixelated. </p>

                                        <h2> Table of Contents </h2>
                                        <div>
                                            <ul>
                                                <li>Front Cover</li>
                                                <li>Table of Contents</li>
                                                <li>Chapter 1: Why Bobby-Tables Rules</li>
                                                <li>Chapter 2: Get In Exchange - The Textbook Exchange</li>
                                                <li>Chapter 3: How Software Engineering Changes The Game</li>
                                                <li>Chapter 4: Give Us An A!</li>
                                                <li>Chapter xx: Content Unlisted</li>
                                            </ul>
                                        </div>

                                        <h2> Contact Information </h2>
                                        <div>
                                            <ul>
                                                <li><b>Email:</b> <i> something.strange@unomaha.edu </i></li>
                                                <li><b>Cell:</b> <i> (Four-Oh-Two) Eight 6 Seven - Five 309</i></li>
                                                <li><b>Available Hours:</b> <i> 10 A.M. - 6 P.M. (M -> R)</i></li>
                                            </ul>
                                        </div>

                                        <hr/>
                                        <div>
                                            <ul>
                                                <li> Do NOT contact me with unsolicited services or offers</li>
                                            </ul>
                                        </div>
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
export default ViewBook