import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "link_box": {
    "borderWidth": "1px",
    "padding": "4px",
    "borderColor": "white",
    "marginRight": "4px",
    "marginLeft": "4px",
    "fontSize": "20px"
  },
  "link_box1": {
    "borderWidth": "1px",
    "borderColor": "#a88734 #9c7e31 #846a29",
    "fontSize": "20px",
    "background": "#f0c14b",
    "borderRadius": "10px",
    "color": "black",
    "marginRight": "5px"
  },
  "sub_nav": {
    "display": "block",
    "marginTop": "7px",
    "fontFamily": "'Cuprum', sans-serif"},
  "pull_right1": {
    "float": "right !important"
  },
  "hand_heading": {
    "fontFamily": "'Cuprum', sans-serif",
    "marginTop": "25px !important"
  },
  "card1" : {
    "borderWidth": "1px",
    "borderColor": "grey",
    "marginTop": "15px",
    "marginBottom": "10px"
  },
  "card_img": {
    "marginBottom": "5px"
  },
  "box_card": {
    "backgroundImage": "linear-gradient(120deg, rgb(230, 240, 255), rgb(255, 253, 229))"
  },
  "font": {
    "fontFamily": "'Cuprum', sans-serif",
    "marginTop": "25px !important"
  },
  "dress_box_text": {
  },
  "box_main":{
    "padding":"20px"
  }
}

export default class Categories extends Component{
  render(){
    return(<div>
      <div>
        <section className="container">
          <h2 style={styles.hand_heading}>Handpickes</h2>
          <p className="text-muted">
The best of global brands, at your doorstep!
</p>
          <article className="row text-xs-center">
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
            <div className="col-md-4 col-sm-6" style={styles.card1}>
              <img className="responsive " alt="Women Clothing" style={styles.card_img} />
              <h5>Women clothing<br /><small className="text-muted">This is sample Text</small></h5>
            </div>
          </article>
        </section>
        <br />
        <section className="container-fluid " style={styles.box_card}>
          <article className="container">
            <br />
            <br />
            <h3>
ONLY THE BEST
</h3>
            <h5>
<small className="text-muted">
Popular categories that people are shopping for right now
</small>
</h5>
            <br />
<div className="row">
  <div className="col-md-6 col-xl-6 col-sm-12 col-lg-6 " style={styles.box_main}>
    <div className="row" style={styles.dress_box}>
      <div className="col-6 img-fluid">
        <img alt="Women Clothing"/>
      </div>
      <div className="col-6 " style={styles.dress_box_text}>
        <h3>  Men's Popular </h3>
        <div> <a> T-Shirts</a>
        <hr />
        <a> Casual Shirts </a>
        <hr />
        <a> Jeans</a>
        <hr />
        <a> Accessories</a>
        <hr />
        <a> Casual Shoes </a>
        <hr />
        <a> Sports Shoes</a>
        <hr />
        <a>Innerwear</a></div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-xl-6 col-sm-12 col-lg-6 " style={styles.box_main}>
    <div className="row" style={styles.dress_box}>
      <div className="col-6 img-fluid">
        <img alt="Women Clothing" />
      </div>
      <div className="col-6 " style={styles.dress_box_text}>
        <h3>  Men's Popular </h3>
        <div> <a> T-Shirts</a>
        <hr />
        <a> Casual Shirts </a>
        <hr />
        <a> Jeans</a>
        <hr />
        <a> Accessories</a>
        <hr />
        <a> Casual Shoes </a>
        <hr />
        <a> Sports Shoes</a>
        <hr />
        <a>Innerwear</a></div>
      </div>
    </div>
  </div>
</div>


          </article>
          <br />
          <br />
        </section>
      </div>


    </div>);
  }
}
