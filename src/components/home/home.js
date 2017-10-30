import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Carousel from './carousel';
import Categories from './categories';

export default class home extends Component{
  render(){
    return(<div><Carousel/>
      <br/><Categories/>
      </div>);
  }
}
