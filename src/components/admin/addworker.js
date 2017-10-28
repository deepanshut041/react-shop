import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class AddWorker extends Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var worker={
      firstName:this.refs.firstName.value,
      lastName:this.refs.lastName.value,
      userName:this.refs.userName.value,
      password:this.refs.password.value,
      address1:this.refs.address1.value,
      address2:this.refs.address2.value,
      city:this.refs.city.value,
      states:this.refs.states.value,
      zipCode:this.refs.zipCode.value,
      phone:this.refs.phone.value,
      email:this.refs.email.value
    }

    if (product.barcode) {
      this.refs.firstName.value='';
      this.refs.lastName.value='';
      this.refs.userName.value='';
      this.refs.password.value='';
      this.refs.address1.value='';
      this.refs.address2.value=1 ;
      this.refs.city.value='';
      this.refs.states.value='';
      this.refs.zipCode.value='';
      this.refs.phone.value='';
      this.refs.email.value='';
      dispatch(actions.startAddWorker(worker))
    } else {
      this.refs.firstName.focus();
    }

  }

  render(){
    return(
      <form onSubmit=handleSubmit()>
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">FirstName</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="firstName" placeholder="FirstName..." />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-2 col-form-label">LastName</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="lastName" placeholder="LastName.." />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">UserName</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="userName" placeholder="UserName.." />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">password</label>
          <div className="col-10">
            <input className="form-control" type="password" ref="password" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">Address1</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="address1" placeholder="Address1" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">Address2</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="address2" placeholder="Address2.." />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">City</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="city" placeholder="City.."/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">State</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="states" placeholder="State.." />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">ZipCode</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="zipCode" placeholder="ZipCode.."/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">Phone</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="phone" placeholder="Phone.."  />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-search-input" className="col-2 col-form-label">Email</label>
          <div className="col-10">
            <input className="form-control" type="text" ref="email" placeholder="Email.."  />
          </div>
        </div>
        <div className="text-right"><button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect()(AddWorker);
