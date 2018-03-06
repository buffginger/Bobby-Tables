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
                this.setState({persons});
            })
    }

    render() {
        return (
            <div>
                <div className="container-fluid sidenavWrapper p-0">
                    <Sidebar/>
                    <div className="maincontent-container-fullwidth">
                        <div className="jumbotron jumbotron-fluid jumbotron-minimalpadding">
                            <div className="container-minimal">
                                <form action="/searchResults.js">
                                    <div className="input-group input-group-lg mb-3">
                                        <input type="text" className="form-control" name="form-control"
                                               id="databaseQuery"
                                               placeholder="Search - ISBN, Author, Publisher & More!"/>

                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary dropdown-toggle"
                                                    type="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">Select Search Type
                                            </button>
                                            <div className="dropdown-menu">
                                                <a selected className="dropdown-item" href="#">All</a>
                                                <a className="dropdown-item" href="#">Author</a>
                                                <a className="dropdown-item" href="#">ISBN-10</a>
                                                <a className="dropdown-item" href="#">ISBN-13</a>
                                                <a className="dropdown-item" href="#">Title</a>
                                                <a className="dropdown-item" href="#">Publisher</a>
                                            </div>
                                        </div>
                                        <div className="input-group-append">
                                                <span className="input-group-text"><button type="submit"
                                                                                           className="btn btn-primary">Submit</button></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <span maxLength="5">
                                    {
                                        this.state.persons.map(person =>
                                            <div className="card" key={person.toString() + Math.random()}>
                                                <span className="card-header"><b>Post </b>{person.id}</span>
                                                <div className="card-body">
                                                    <h5 className="card-title">{person.name}</h5>
                                                    <p className="card-text" maxLength="10">
                                                <span className="limitText">
                                                    {person.company.catchPhrase}
                                                </span>
                                                    </p>
                                                    <a href="./samplebook" className="btn btn-primary">Check it
                                                        out!</a>
                                                </div>
                                                <br/>
                                            </div>
                                        )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default Home