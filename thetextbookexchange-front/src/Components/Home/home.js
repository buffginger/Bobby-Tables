import React from 'react';

import axios from 'axios';
// Page has Sidebar
import Sidebar from '../Sidebar/sidebar';

// Homepage component/module.
class Home extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

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
                                    <div maxlength="5">
                                        { this.state.persons.map(person => 
                                            <div class="card">
                                                <div class="card-header"><b>Post </b>{person.id}</div>
                                                <div class="card-body">
                                                    <h5 class="card-title">{person.name}</h5>
                                                    <p class="card-text" maxlength="10">
                                                        <div class="limitText">
                                                            {person.company.catchPhrase}
                                                        </div>
                                                    </p>
                                                    <a href="./samplebook" class="btn btn-primary">Check it out!</a>
                                                </div>
                                                <br/>
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