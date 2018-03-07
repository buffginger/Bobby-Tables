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
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <span className="navbar-brand mb-0 h1">Sell a Book</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Actions
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Clear All</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Cancel</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="card">
                            <h5 className="card-header">Item Description</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="description">Let potential buyers know what textbook you are selling
                                        and anything they should know about it.</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                              rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Item Details</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="isbn10">ISBN-10</label>
                                    <input type="text" className="form-control" id="isbn10" aria-describedby="ISBN10"
                                           placeholder="#"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isbn13">ISBN-13</label>
                                    <input type="text" className="form-control" id="isbn13" aria-describedby="ISBN13"
                                           placeholder="#"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="publisher">Publisher</label>
                                    <input type="text" className="form-control" id="publisher"
                                           aria-describedby="Book Publisher" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author(s)</label>
                                    <input type="text" className="form-control" id="author"
                                           aria-describedby="Book Author" placeholder="Name(s)"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edition">Edition</label>
                                    <input type="text" className="form-control" id="edition"
                                           aria-describedby="Book Edition" placeholder="#"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="copyright">Copyright Year</label>
                                    <input type="text" className="form-control" id="copyright"
                                           aria-describedby="Book Copyright Year" placeholder="ex. 2018"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="spinetype">Spine Type</label>
                                    <input type="text" className="form-control" id="spinetype"
                                           aria-describedby="Spine Type" placeholder="ex. Hardcover or Paperback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pages">Approximate Pages</label>
                                    <input type="text" className="form-control" id="pages"
                                           aria-describedby="Approximate Book Pages" placeholder="#"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Item Condition</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Let everyone know what shape your book is
                                        in.</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>New</option>
                                        <option>Mint / Like New</option>
                                        <option>Very Good</option>
                                        <option>Good</option>
                                        <option>Acceptable</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Price</h5>
                            <div className="card-body">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="negotiable"/>
                                    <label className="form-check-label" htmlFor="negotiable">Negotiable</label>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="price">Sell Price</label>
                                    <input type="text" className="form-control" id="price" aria-describedby="Sell Price"
                                           placeholder="$"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Submit</h5>
                            <div className="card-body">
                                <button type="button" className="btn btn-primary">Submit</button>
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