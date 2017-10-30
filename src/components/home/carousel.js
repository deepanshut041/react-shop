import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

export default class Carousel extends Component{
  render(){
    return(<div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid"  alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid"  alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
