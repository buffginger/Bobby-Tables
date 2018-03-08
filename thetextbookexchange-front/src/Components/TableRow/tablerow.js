import { Component } from 'react';
import React from 'react';
import axios from 'axios';

class TableRow extends Component {
  render() {
    return (
        <div>{this.props.obj.title}</div>
                                
    );
  }
}

export default TableRow;