import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class SellBook extends React.Component {

    // Initialize the state
    constructor(props) {
    super(props);
       
    this.state = {
          newBook: {
              title: '',
              description: '',
              price: 0,
              availability: 0
          }
        }

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
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" className="form-control" id="isbn" aria-describedby="ISBN"
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
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject"
                                           aria-describedby="Subject" placeholder="e.g Math"/>
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