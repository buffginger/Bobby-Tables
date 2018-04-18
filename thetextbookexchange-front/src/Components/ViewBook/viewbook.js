import React from 'react'
import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
import queryString from 'query-string';
import Cookies from 'universal-cookie';

// Homepage component/module.
class ViewBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                        book: [],
                        user: []
                    }

        const { handle } = this.props.match.params
        try {
            const response = axios.get(`https://api.thetextbookexchange.club/api/books/${handle}`)
        } catch (error) {
            this.props.history.push("/home");
        }
        axios.get(`https://api.thetextbookexchange.club/api/books/${handle}`)
        .then(res => res.data)
        .then(book => {
            this.setState({
                book: book
            })
        })
      }

    getUserInfo() {
        const cookies = new Cookies();
         axios.get('http://localhost:8000/api/userInfo/' + this.state.book.seller, {
                       headers: {
                           Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                       }
                   })
                   .then(res => res.data)
                   .then(user =>{
                        this.setState({
                            user: user
                        })
                   })
    }

    render() {
        const isNegVal = this.state.book.negotiable;
        var isNegotiable = "Yes"
        if (isNegVal == 0) isNegotiable = "No";
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container" onLoad={this.getUserInfo.bind(this)}>
                                <h1 className="display-1">{this.state.book.title} | ${this.state.book.price}</h1>
                                <p className="lead" style={{"padding-left": 15}}>

                                    <div id="carousel" class="carousel slide" data-ride="carousel">
                                        <div class="bookImg">
                                            <img src={this.state.book.image} alt="Book Image" width="120" height="135"/>
                                        </div>
                                    </div>

                                    <hr/>

                                    <div style={{"padding-left": 15}} div class="book-img">
                                        <h2> Item Description </h2>
                                        <p>{this.state.book.description}</p>

                                        <h2> Item Details </h2>
                                        <div>
                                            <ul>
                                                <li><b>Title:</b> <i> {this.state.book.title} </i></li>
                                                <li><b>Author:</b> <i> {this.state.book.author} </i></li>
                                                <li><b>ISBN:</b> <i> {this.state.book.isbn} </i></li>
                                                <li><b>Edition:</b> <i> {this.state.book.edition} </i></li>
                                                <li><b>Subject:</b> <i> {this.state.book.subject} </i></li>
                                                <li><b>Condition:</b> <i> {this.state.book.condition} </i></li>
                                                <li><b>Price:</b> <i> ${this.state.book.price} </i></li>
                                                <li><b>Negotiable:</b> <i> {isNegotiable} </i></li>
                                                <li>{this.state.book.seller}</li>
                                            </ul>
                                        </div>

                                        <h2> Contact Information </h2>
                                        <div>
                                            <ul>
                                                <li><b>Email:</b> <i> {this.state.user.email} </i></li>
                                                <li><b>Cell:</b> <i> {this.state.user.phone} </i></li>
                                            </ul>
                                        </div>


                                         <p> google maps stuff</p>
                                    <p> this is the embedded map </p>
                                    <iframe  style={{width:600,
                                    height:450,
                                    frameborder:0,
                                    border:0}}
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCF9x6v1uvKWx_RMbbQSch4O-TIM3Smdgk&q=Omaha,Nebraska" allowfullscreen>
                                    </iframe>
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