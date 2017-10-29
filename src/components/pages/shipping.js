import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "conatiner":{
    "padding": "50px",
    "margin": "0px 100px",
    "background": "white"
  }
}

export default class Shipping extends Component{
  render(){
    return(
<div className="container" style={styles.container}>
        <div className="row">
          <h3>Shipping</h3>
          <br />
          <br />
          <hr />
        </div>
        <div className="row">
          <h5>
What are the delivery charges?
</h5>
          <p>Delivery charge varies with each Seller.
<br />
<br />
Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. The delivery charge may be waived off by some Sellers, if you shop with them for a minimum predefined value.
          </p>
          <p>For example, seller WS Retail charges Rs 40 for delivery per item if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free. Please check with individual Sellers to understand their delivery charges.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
Why does the delivery date not correspond to the delivery timeline of X-Y business days?
</h5>
          <p>
It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
What is the estimated delivery time?
</h5>
          <p>
Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.
</p>
          <p>
Estimated delivery time depends on the following factors:
<br />
</p>
          <ul>
            <li>
The Seller offering the product
</li>
            <li>
Product's availability with the Seller
</li>
            <li>
The destination to which you want the order shipped to and location of the Seller
</li>
          </ul>
        </div>
        <br />
        <div className="row">
          <h5>
Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on fashionista?
</h5>
          <p>
There are NO hidden charges when you make a purchase on fashionista. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.
</p>
          <p>
            Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
Why does the estimated delivery time vary for each seller?
</h5>
          <p>
You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.
            Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
I need to return an item, how do I arrange for a pick-up?
</h5>
          <p>
Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.
</p>
        </div>
        <br />
      </div>
    );
  }
}
