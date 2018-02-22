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
                                    <div class="card">
                                        <div class="card-header"><b>Post</b> #1213411 | <b>Date Posted:</b> 02/21/2018 | <b>Price Negotiable:</b> No</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Tumbeasts - Special Edition | $5</h5>
                                            <p class="card-text" maxlength="10">
                                                    <div class="limitText">
                                                    Hello All! I am selling the tumbeasts book - as the title specifies. The tumbeasts within vary in emotions and mental stability. They are collected from all over the internet and therefore are very unique and also compounded into a special edition, just for you! The book is 5$. What a bargain.
                                                    </div>
                                            </p>
                                            <a href="./samplebook" class="btn btn-primary">Check it out!</a>
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
export default Home