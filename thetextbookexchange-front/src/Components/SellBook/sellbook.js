import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class SellBook extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <span class="navbar-brand mb-0 h1">Sell a Book</span>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Actions
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Clear All</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Cancel</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="card">
                            <h5 class="card-header">Item Description</h5>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="description">Let potential buyers know what textbook you are selling and anything they should know about it.</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="card-header">Item Details</h5>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="isbn10">ISBN-10</label>
                                    <input type="text" class="form-control" id="isbn10" aria-describedby="ISBN10" placeholder="#"/>
                                </div>
                                <div class="form-group">
                                    <label for="isbn13">ISBN-13</label>
                                    <input type="text" class="form-control" id="isbn13" aria-describedby="ISBN13" placeholder="#"/>
                                </div>
                                <div class="form-group">
                                    <label for="publisher">Publisher</label>
                                    <input type="text" class="form-control" id="publisher" aria-describedby="Book Publisher" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="author">Author(s)</label>
                                    <input type="text" class="form-control" id="author" aria-describedby="Book Author" placeholder="Name(s)"/>
                                </div>
                                <div class="form-group">
                                    <label for="edition">Edition</label>
                                    <input type="text" class="form-control" id="edition" aria-describedby="Book Edition" placeholder="#"/>
                                </div>
                                <div class="form-group">
                                    <label for="copyright">Copyright Year</label>
                                    <input type="text" class="form-control" id="copyright" aria-describedby="Book Copyright Year" placeholder="ex. 2018"/>
                                </div>
                                <div class="form-group">
                                    <label for="spinetype">Spine Type</label>
                                    <input type="text" class="form-control" id="spinetype" aria-describedby="Spine Type" placeholder="ex. Hardcover or Paperback"/>
                                </div>
                                <div class="form-group">
                                    <label for="pages">Approximate Pages</label>
                                    <input type="text" class="form-control" id="pages" aria-describedby="Approximate Book Pages" placeholder="#"/>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="card-header">Item Condition</h5>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Let everyone know what shape your book is in.</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>New</option>
                                        <option>Mint / Like New</option>
                                        <option>Very Good</option>
                                        <option>Good</option>
                                        <option>Acceptable</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="card-header">Price</h5>
                            <div class="card-body">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="negotiable"/>
                                    <label class="form-check-label" for="negotiable">Negotiable</label>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="price">Sell Price</label>
                                    <input type="text" class="form-control" id="price" aria-describedby="Sell Price" placeholder="$"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default SellBook