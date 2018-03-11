import React from 'react';
import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';
import TableRow from '../TableRow/tablerow';

// Homepage component/module.
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {keyboardInput: '',
                      selection: 'title',
                      searchResults: '',
                        books: []
                      
                    };
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // this right now just shows what was entered
        this.tabRow;
      }
    
      handleChange1(event) {
        this.setState({keyboardInput: event.target.value}); // this must remain to be value
      }

      handleChange2(event) {
        this.setState({selection: event.target.value}); // this must remain to be value
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.keyboardInput + '\n' +
        'A selection type was made: ' + this.state.selection);
        event.preventDefault();

            //let testURL = 'http://localhost:3030';
          
            if(this.state.selection === 'title'){
                var self = this;
                var json;
                axios.get('localhost:8000/api/searchtitle',{
                    params: {
                        titleName: this.state.keyboardInput
                    }
                })
                .then(res => {
                    
                    //const searchResults = res.data;
                    //this.setState({ searchResults });
                   
                    json = JSON.parse(res.data);
                    alert(json["title"]);
                    //alert('searchResults was set with: ' + this.state.searchResults);
                    //console.log(this.state.searchResults);
                })
                .catch(function (error) {
                console.log(error);
                alert('there was an error');
                });
            }
            /*else if(this.state.selection === 'author'){
                axios.get(testURL, {
                    params: {
                        author: this.state.keyboardInput
                    }
                })
                .then(res => {
                    this.setState({ searchResults: res.data.searchResults });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else if(this.state.selection === 'isbn'){
                axios.get(testURL, {
                    params: {
                        isbn: this.state.keyboardInput
                    }
                })
                .then(res => {
                    this.setState({ searchResults: res.data.searchResults });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }*/
            event.preventDefault();
    }
    tabRow(){
        /// this.state.data.books is what it used to be
        if(this.state.books instanceof Array){
            return this.state.books.map(function(object, i){
                return <TableRow obj={object} key={i} />;
            })
          }
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
                            <form onSubmit={this.handleSubmit}>
                                    <div className="input-group input-group-lg mb-3"> 
                                            <input type="text" className="form-control" name="form-control"
                                               id="databaseQuery" value={this.state.keyboardInput} placeholder="Search - ISBN, Author, & Title!"
                                             onChange={this.handleChange1}/>
                                            <div class="input-group-append">
                                                <select value={this.state.selection} onChange={this.handleChange2}>
                                                    <option value="title">Title</option>
                                                    <option value="author">Author</option>
                                                    <option value="isbn">ISBN</option>
                                                </select>
                                            </div>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
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