import React from 'react'
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
import axios from 'axios';
import Cookies from 'universal-cookie';

// Homepage component/module.
class SellBook extends React.Component {

    // Initialize the state
    constructor(props) {
    super(props);
    
    this.state = {
              title: '',
              author: '',
              isbn: 0,
              edition: '',
              image: '',
              subject: '',
              condition: '',
              price: '',
              negotiable: false,
              description: ''
        }
    

    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    }  
     
    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
    //preventDefault prevents page reload 
    e.preventDefault();  
    const form = new FormData(e.target);
    const cookies = new Cookies();
    var isNegotiable = false;

    if (form.get("negotiable") != null) {
        isNegotiable = true;
    }

    var imageURL = "https://cdn.shopify.com/s/files/1/1061/1924/products/Open_Book_Emoji_large.png?v=1480481040";
    if (form.get("image") != null) {
        imageURL = form.get("image");
    }
    
    // Set the new states 
    const data = {
        title: form.get('title'),
        author: form.get('author'),
        isbn: form.get("isbn"),
        edition: form.get("edition"),
        image: imageURL,
        subject: form.get("subject"),
        condition: form.get("condition"),
        price: form.get("price"),
        negotiable: isNegotiable,
        description: form.get("description")
    }

    axios.post('https://api.thetextbookexchange.club/api/books', data, {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken')
                    }       
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .then(response=> {
            alert("You successfully added the book: " + data['title']);
            this.props.history.push("/home");
          })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

    
    
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

                        <form onSubmit={this.handleSubmit}>

                        <div className="card">
                            <h5 className="card-header">Item Description</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="description">Let potential buyers know what textbook you are selling
                                        and anything they should know about it.</label>
                                    <input type="textarea" name="description" className="form-control" id="exampleFormControlTextarea1" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Item Details</h5>
                            <div className="card-body">

                            <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="title"
                                           placeholder="title" name="title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" className="form-control" id="isbn" aria-describedby="ISBN"
                                           placeholder="#" name="isbn"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author(s)</label>
                                    <input type="text" className="form-control" id="author"
                                           aria-describedby="Book Author" placeholder="Name(s)" 
                                           name="author"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edition">Edition</label>
                                    <input type="text" className="form-control" id="edition"
                                           aria-describedby="Book Edition" placeholder="#"
                                           name="edition"/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject"
                                           aria-describedby="Subject" placeholder="e.g Math"
                                           name="subject"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Item Condition</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Let everyone know what shape your book is
                                        in.</label>
                                    <select className="form-control" id="exampleFormControlSelect1"
                                    name="condition">
                                        <option>Select></option>
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
                                    <input type="checkbox" className="form-check-input" id="negotiable" 
                                    name="negotiable"/>
                                    <label className="form-check-label" htmlFor="negotiable">Negotiable</label>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="price">Sell Price</label>
                                    <input type="text" className="form-control" id="price" aria-describedby="Sell Price"
                                           placeholder="$" name="price"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Image</h5>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="image">Image URL</label>
                                    <input type="text" className="form-control" id="image" aria-describedby="Image URL"
                                           placeholder="http://www.exampleImageSource.com/image.png" name="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Submit</h5>
                            <div className="card-body">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default SellBook