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
              subject: '',
              condition: '',
              price: '',
              negotiable: false,
              description: ''
        }
    

    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }  

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {
    //alert('key:' + key + "  e: " + e.target.value);
    this.setState({key: e.target.value})
    }
     
    /*Duplicating and updating the state 
    var state = Object.assign({}, this.state.newBook); 
    state[key] = e.target.value;
    this.setState({newBook: state });
    } */

    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
    //preventDefault prevents page reload   
    const cookies = new Cookies();

    axios.post('http://localhost:8000/api/books', {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                    },
                    params: {
                        title: this.state.title,
                        author: this.state.author
                    }
                })
    alert("You submitted: title:" + this.state.title + "and author: " + this.state.author);
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
                                    <input type="textarea" className="form-control" id="exampleFormControlTextarea1"
                                              onChange={(e)=>this.handleInput('description',e)} />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Item Details</h5>
                            <div className="card-body">

                            <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="title"
                                           placeholder="title" onChange={(e)=>this.handleInput('title',e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" className="form-control" id="isbn" aria-describedby="ISBN"
                                           placeholder="#" onChange={(e)=>this.handleInput('isbn',e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author(s)</label>
                                    <input type="text" className="form-control" id="author"
                                           aria-describedby="Book Author" placeholder="Name(s)" 
                                           onChange={(e)=>this.handleInput('author',e)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edition">Edition</label>
                                    <input type="text" className="form-control" id="edition"
                                           aria-describedby="Book Edition" placeholder="#"
                                           onChange={(e)=>this.handleInput('edition',e)}/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject"
                                           aria-describedby="Subject" placeholder="e.g Math"
                                           onChange={(e)=>this.handleInput('subject',e)}/>
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
                                    onChange={(e)=>this.handleInput('condition',e)}>
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
                                    defaultChecked={this.state.negotiable} 
                                    onChange={(e)=>this.handleInput('negotiable',e)}/>
                                    <label className="form-check-label" htmlFor="negotiable">Negotiable</label>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="price">Sell Price</label>
                                    <input type="text" className="form-control" id="price" aria-describedby="Sell Price"
                                           placeholder="$" onChange={(e)=>this.handleInput('price',e)}/>
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