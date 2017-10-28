import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "over":{
    "overflow-x":"auto"
  }
}


export default class Order extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div style={styles.over}>
          <table className="table">
            <thead className="thead-inverse">
              <tr>
                <th className="text-center">#id</th>
                <th className="text-center">Order Date</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-center">1</th>
                <td className="text-center">23-23-23</td>
                <th scope="row" className="text-center">5</th>
                <td scope="row" className="text-center">shipped</td>
                <td className="text-right">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">More</button>
                    <button type="button" className="btn btn-warning">Shipped</button>
                    <button type="button" className="btn btn-success">Dilivered</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
