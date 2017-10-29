import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "conatiner":{
    "padding": "50px",
    "margin": "0px 100px",
    "background": "white"
  }
}
export default class Payment extends Component{
  render(){
    return(
      <div className="container" style={styles.container}>
        <div className="row">
          <h3>Payments</h3>
          <br />
          <br />
          <hr />
        </div>
        <div className="row">
          <h5>
How do I pay for a fashionista purchase?
</h5>
          <p>
fashionista offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that fashionista's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.
</p>
          <p>
You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to make your purchase.
            fashionista also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India and 21 other countries.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on fashionista?
</h5>
          <p>
There are NO hidden charges when you make a purchase on fashionista. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.
</p>
          <p>
Delivery charges may be extra depending on the seller policy. Please check individual seller for the same. In case of seller WS Retail, the â‚¹50 delivery charge is waived off on orders worth â‚¹500 and over.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
What is Cash on Delivery?
</h5>
          <p>
If you are not comfortable making an online payment on fashionista.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online.
</p>
          <p>The maximum order value for a Cash on Delivery (C-o-D) payment is â‚¹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
How do I place a Cash on Delivery (C-o-D) order?
</h5>
          <p>
All items that have the "Cash on Delivery Available" icon are valid for order by Cash on Delivery.<br />Add the item(s) to your cart and proceed to checkout. When prompted to choose a payment option, select "Pay By Cash on Delivery". Enter the CAPTCHA text as shown, for validation.
</p>
          <p>
            Once verified and confirmed, your order will be processed for shipment in the time specified, from the date of confirmation. You will be required to make a cash-only payment to our courier partner at the time of delivery of your order to complete the payment.
<br />
<br />
            Terms &amp; Conditions:<br />
            The maximum order value for C-o-D is â‚¹50,000<br />
            Gift Cards or Store Credit cannot be used for C-o-D orders<br />
            Cash-only payment at the time of delivery.
          </p>
        </div>
      </div>

    );
  }
}
