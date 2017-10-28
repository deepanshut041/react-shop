import React,{Component} from 'react';
import {Route,BrowserRouter,NavLink} from 'react-router-dom';


import AddWorker from './addworker';
import WorkerList from './workerlist';

export default class Worker extends Component{
  render(){
    return(<BrowserRouter basename='/admin/worker'>
      <div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><NavLink to="list">List</NavLink></li>
            <li className="list-inline-item"><NavLink to="addworker">AddWorker</NavLink></li>
          </ul>
        </div>
        <br/>
        <div>
          <Route path='/list' component={WorkerList} />
          <Route  exact path='/' component={WorkerList} />
          <Route path='/addworker' component={AddWorker} />
        </div>
      </div>
    </BrowserRouter>);
  }
}
