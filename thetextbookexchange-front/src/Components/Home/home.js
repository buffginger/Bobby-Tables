import React from 'react';
import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class Home extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`https://api.thetextbookexchange.club/api/books`)
        .then(res => {
            const books = res.data;
            this.setState({ books });
        })
    }

    // page2 = () => {
    //     document.getElementById('1').style.display = 'none';
    //     document.getElementById('2').style.display = 'none';
    //     document.getElementById('3').style.display = 'none';
    //     document.getElementById('4').style.display = 'none';
    //     document.getElementById('5').style.display = 'none';
            // <div id="test1">
            //                         <center><button onClick={this.page2}>
            //                             Page 2
            //                         </button></center>
            //                     </div>
    // }

    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid jumbotron-minimalpadding">
                            <div className="container-minimal">
                                <form action="/searchResults.js">
                                    <div className="input-group input-group-lg mb-3">
                                        <input type="text" className="form-control" name="form-control"
                                               id="databaseQuery"
                                               placeholder="Search - ISBN, Author, Publisher & More!"/>

                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary dropdown-toggle"
                                                    type="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">Select Search Type
                                            </button>
                                            <div className="dropdown-menu">
                                                <a selected className="dropdown-item" href="#">All</a>
                                                <a className="dropdown-item" href="#">Author</a>
                                                <a className="dropdown-item" href="#">ISBN-10</a>
                                                <a className="dropdown-item" href="#">ISBN-13</a>
                                                <a className="dropdown-item" href="#">Title</a>
                                                <a className="dropdown-item" href="#">Publisher</a>
                                            </div>
                                        </div>
                                        <div className="input-group-append">
                                                <span className="input-group-text"><button type="submit"
                                                                                           className="btn btn-primary">Submit</button></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="container-minimal">
                                { this.state.books.map(book => 
                                    <div>
                                        <div class="card" id={book.id}>
                                            <div class="card-body">
                                                <h2><b>Title: {book.title}</b></h2>
                                                <div class="bookInfo">
                                                    <h6 class="card-title noLnBrk">Author: {book.author}</h6>
                                                    <h6 class="card-title noLnBrk">ISBN: {book.isbn}</h6>
                                                    <br/>
                                                    <h6 class="card-title noLnBrk">Edition: {book.edition}</h6>
                                                    <h6 class="card-title noLnBrk">Subject: {book.subject}</h6>
                                                    <br/><br/>
                                                    <a href="./samplebook/" class="btn btn-primary">Check it out!</a>
                                                </div>
                                                <div class="bookImg">
                                                    <img src={book.image} alt="Book Image" width="120" height="135"/>
                                                </div>
                                            </div>
                                            <br/>
                                        </div>
                                        <div>
                                            <br/>
                                        </div>
                                    </div>
                                )}
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