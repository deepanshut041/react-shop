import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

var styles={
  "over":{
    "overflow-x":"auto"
  }
}

class WorkerList extends Component{
  renderWorker(worker){
    <tr >
      <td colspan="3">this.worker.name</td>
      <td  colspan="2" className="text-center">this.worker.phone</td>
      <td >this.worker.email</td>
      <td className="text-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">More</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  }

  render(){
    return(<div style={styles.over}>
      <table className="table">
        <thead className="thead-inverse">
          <tr>
            <th colspan="3">Name</th>
            <th className="text-center" colspan="2"> Mobile No</th>
            <th  colspan="2">Email</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody >
          {this.props.workers.map(this.renderWorker)}
        </tbody>
      </table>
    </div>);
  }
}
function mapStateToProps({workers}) {
	return {workers};
}

export default connect(mapStateToProps)(WorkerList);
