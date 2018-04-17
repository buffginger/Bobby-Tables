import React from 'react';
import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
//import TableRow from '../TableRow/tablerow';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// Homepage component/module.
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        books: []
                    };
      }
    
    

        
    componentDidMount() {
        const cookies = new Cookies();

        axios.get('http://localhost:8000/api/mybooks', {
                    headers: {
                        Authorization: 'Bearer ' + cookies.get('TBEAuthToken'),
                    }
        })
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
                        <div><h1>&nbsp;My Books For Sale</h1></div>
                            

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
                                                    <a href={"./samplebook" + book.id} class="btn btn-primary">Check it out!</a>
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

                            {/*<p>Here is something i pulled from db: {this.state.searchResults.map(thingy => thingy.title )}</p>                                                  
                        */}</div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Home