import React,{Component} from 'react';
import {Route,BrowserRouter,Link,withRouter,Redirect} from 'react-router-dom';
import Worker from './worker';
import Order from './orders';
import Product from './product';
import Inventory from './inventory';

var styles={
  "main_container": {
    "margin": "10px",
    "border": "2px solid #eaeaea",
    "borderRadius": "5px",
    "background": "white",
    "padding": "10px"
  },
  "router": {
    "margin":"10px",
    "border": "2px solid #eaeaea",
    "borderRadius": "5px",
    "padding": "25px"
  },
  "sidebar":{
      "margin":"10px"
  }
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
  <button className="btn btn-primary" onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
  ) : (
    <p>Welcome</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-4 col-form-label">Username:</label>
            <div className="col-6">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-4 col-form-label">Password:</label>
            <div className="col-6">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
          </div>
        <button className="btn-success btn" onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default class Admin extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter basename='/admin'>
        <div className="main-body">
          <div className="container-fluid" style={styles.main_container}>
            <div className="row">
              <h1 className="col-6">Admin</h1>
              <div className="justify-content-end text-left">
                <AuthButton/>
              </div>
            </div>

            <hr/>
            <div className="row">
              <div className="col-md-3" style={styles.sidebar}>
                <div className="list-group">
                  <Link to='order' className="list-group-item list-group-item-action">Orders</Link>
                  <Link to='product' className="list-group-item list-group-item-action">Product</Link>
                  <Link to='inventory'  className="list-group-item list-group-item-action">Inventory</Link>
                  <Link to='worker' className="list-group-item list-group-item-action">WorkerEdit</Link>
                </div>
              </div>
              <div className="col" style={styles.router}>
                <Route path="/login" component={Login}/>
                <PrivateRoute exact path="/" component={Order} />
                <PrivateRoute path="/order" component={Order} />
                <PrivateRoute path="/worker" component={Worker} />
                <PrivateRoute path="/inventory" component={Inventory} />
                <PrivateRoute path="/product" component={Product} />
              </div>
            </div>
            <br/>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}
