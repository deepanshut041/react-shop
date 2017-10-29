import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Payment from './payment';
import Shipping from './shipping';
import Cancellation from './cancellation';
import Faqs from './faqs';
import Report from './report';
import Online from './online';
import Affilate from './affilate';
import Subscribe from './subscribe';
import Customer from './customer';
import Wrong from './wrong';

export default class Pages extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <BrowserRouter basename="/pages">
      <div>
        <Route path="/payment" component={Payment} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/cancellation" component={Cancellation} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/report" component={Report} />
        <Route path ="/online" component={Online} />
        <Route path ="/affilate" component={Affilate} />
        <Route path ="/subscribe" component={Subscribe} />
        <Route path ="/coustmer-care" component={Customer} />
      </div>
      </BrowserRouter>
    );
  }
}
