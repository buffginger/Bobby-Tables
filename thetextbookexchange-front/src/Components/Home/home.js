import React from 'react';

import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
// Top navigation bar
import Nav from '../Navbar/navbar';


// Homepage component/module.
class Home extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/books`)
        .then(res => {
            const books = res.data;
            this.setState({ books });
        })
    }

    render() {
        return (
            <div>
            <Nav/>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Homepage</h1>
                                <div>
                                    <form action="/searchResults.js">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" id="databaseQuery" placeholder="Search - ISBN, Author, Publisher & More!"/>
                                            
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Search Type</button>
                                                <div class="dropdown-menu">
                                                    <a selected class="dropdown-item" href="#">All</a>
                                                    <a class="dropdown-item" href="#">Author</a>
                                                    <a class="dropdown-item" href="#">ISBN-10</a>
                                                    <a class="dropdown-item" href="#">ISBN-13</a>
                                                    <a class="dropdown-item" href="#">Title</a>
                                                    <a class="dropdown-item" href="#">Publisher</a>
                                                </div>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text"><button type="submit" class="btn btn-primary">Submit</button></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p className="lead">
                                    <hr/>
                                    
                                    <br/>
                                    <div>
                                        { this.state.books.map(book => 
                                            <div>
                                                <div class="card">
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
export default Home