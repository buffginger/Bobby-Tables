import { Component } from 'react';
import React from 'react';
import axios from 'axios';

class TableRow extends Component {
  render() {
    return (
        <span maxLength="5">               
            <div className="card">
                    <span className="card-header"><b>Post </b>{this.props.obj.id}</span>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.obj.title}</h5>
                                <p className="card-text" maxLength="10">
                                    <span className="limitText">
                                    {this.props.obj.title}
                                    </span>
                                </p>
                                <a href="./samplebook" className="btn btn-primary">Check it out!</a>
                        </div>
                        <br/>
            </div>                               
        </span>
    );
  }
}

export default TableRow;