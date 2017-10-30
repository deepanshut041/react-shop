import React, { Component } from 'react';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
import {Route,BrowserRouter} from 'react-router-dom';
import Admin from './admin/admin';
import Home from './home/home';
import Pages from './pages/pages';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <Navbar/>
          <br/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/pages/:id" component={Pages}/>
          <br/>
          <Footer />
        </div>
    </BrowserRouter>
    );
  }
}

//<Route path="/products/:id" component={Products}/>
//<Route path="/product/:id" component={Product}/>
//<Route path="/user/:id" component={User}/>
