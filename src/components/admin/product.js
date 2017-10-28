import React,{Component} from 'react';
import {Route,BrowserRouter,NavLink} from 'react-router-dom';
import EditProduct from './editproduct';
import AddProduct from './addproduct';


export default class Product extends Component{
  render(){
    return(<BrowserRouter basename='/admin/product'>
      <div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><NavLink to="editproduct">EditProduct</NavLink></li>
            <li className="list-inline-item"><NavLink to="addproduct">AddProduct</NavLink></li>
          </ul>
        </div>
        <div>
          <Route path='/editproduct' component={EditProduct} />
          <Route  exact path='/' component={EditProduct} />
          <Route path='/addproduct' component={AddProduct} />
        </div>
      </div>
    </BrowserRouter>);
  }
}
