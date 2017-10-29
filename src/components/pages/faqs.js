import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "conatiner":{
    "padding": "50px",
    "margin": "0px 100px",
    "background": "white"
  }
}

export default class Faqs extends Component{
  render(){
    return(<div className="container" style={styles.container}>
        <div className="row">
          <h3>Help&amp;Faq's</h3>
          <br />
          <br />
          <hr />
        </div>
        <hr />
        <br />
        <div className="row">
          <h4>
My Account &amp; My Orders
</h4>
          <br />
          <hr />
        </div>
        <br />
        <div className="row">
          <h5>
What is 'My Account'? How do I update my information ?
</h5>
          <p>It is easy to update your fashionista account and view your orders any time through 'My Account'.
            'My Account' allows you complete control over your transactions on fashionista
          </p>
          <br />
          <ul>
            <li>
Manage/edit your personal data like address, phone numbers, email ids
</li>
            <li>
Change your password
</li>
            <li>
Track the status of your orders
</li>
          </ul>
        </div>
        <br />
        <div className="row">
          <h5>
How do I merge my fashionista accounts linked to different email ids?
</h5>
          <p>You can merge two of your fashionista accounts linked to different email ids or update the email id linked to your existing fashionista account. The process is the same.
            <br /><strong>
Step 1:
</strong> Log in to your fashionista account.
            <br />
<br />
<strong>
Step 2:
</strong> In the 'My Account' pane, go to the 'Settings' tab and click on the 'Update EMail' option
            <br />
<br />
<strong>
Step 3:
</strong> In the 'Update Email' page, your 'current email' id is shown.
            <br />-Enter your 'new email' id below.
            <br />- Click the 'Save Changes' button. You will receive a 'We have sent a mail to your new email id for re-confirmation' message.
            <br />
<br />
<strong>
Step 4:
</strong> Go to your 'new email' account and click on the fashionista account - Update Email message for confirmation.
            <br />
<br />
<strong>
Step 5:
</strong> You are now redirected to the 'Update Email' page.
            <br />-Below your 'new email' id, provide the password for your current fashionista account.
            <br />-Enter your new fashionista account password.
            <br />-Re-enter to confirm your new fashionista account password.
            <br />-Click the 'Update Email' button.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
How do I know my order has been confirmed?
</h5>
          <p>
Once your order has been logged and payment authorization has been received, the seller confirms receipt of the order and begins processing it.
            <br />You will receive an email containing the details of your order when the seller receives it and confirms the same. In this mail you will be provided with a unique Order ID (eg. OD01202130213), a listing of the item(s) you have ordered and the expected delivery time.
            <br />You will also be notified when the seller ships the item(s) to you. Shipping details will be provided with the respective tracking number(s).
</p>
        </div>
        <br />
        <div className="row">
          <h5>
Can I order a product that is 'Out of Stock'?
</h5>
          <p>
Unfortunately, products listed as 'Out of Stock' are not available for sale. Please use the 'Notify Me' feature to be informed of the product's availability with sellers on fashionista.
</p>
        </div>
        <br />
        <br />
        <div className="row">
          <h4>Shopping</h4>
          <br />
          <hr />
        </div>
        <br />
        <br />
        <div className="row">
          <h5>
Is it necessary to have an account to shop on fashionista?
</h5>
          <p>You can shop on fashionista by providing just your email ID. While it is not necessary to have an account to shop for and purchase items, it is recommended that you create one. By creating your own fashionista account, you can enjoy a personalized shopping experience, including recommendations, quicker checkout and a public wishlist. You will also be able to rate/review products and sellers
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
What is 'fashionista Advantage'?
</h5>
          <p>fashionista Advantage is a stamp of quality. Products marked with 'fashionista Advantage' are sold by/sourced from a Seller but are quality checked, stocked, packed and shipped by fashionista.
            <br />
<br />
You may also avail the expedited delivery* options such as Same Day/In-a-Day Guarantee (based on the location), all the while backed by fashionista's 24x7 customer service.
            <br />
<br />
Rest assured, when you see the 'fashionista Advantage' badge, you know you can buy the product from a Seller with complete confidence.
            <br />
<br />
*Shipments from locations where relevant permissions have been obtained
            <br />
<br />
Returns are subject to the return policy that is applicable to the product category and the respective seller. Know more about return policy period applicable for different categories here.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
For a Buyer, what does 'fashionista Advantage' mean?
</h5>
          <p>
fashionista Advantage is our fulfillment service for Sellers. Products sourced from Sellers are quality checked, stocked and shipped by us. As a Buyer, you are thus assured of product quality, faster delivery and hassle-free returns.
</p>
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
What is Cash on Delivery?
</h5>
          <p>
If you are not comfortable making an online payment on fashionista.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online.
</p>
          <p>The maximum order value for a Cash on Delivery (C-o-D) payment is â‚¹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
          </p>
        </div>
        <br />
        <br />
        <div className="row">
          <h4>
Order Status
</h4>
          <br />
          <hr />
        </div>
        <br />
        <div className="row">
          <h5>
How do I check the current status of my orders?
</h5>
          <p>
You can review the status of your orders and other related information in the 'My Account' section
            <br />In the My Account page, click on the 'My Orders' link to view the status of all your orders. To view the status of a specific order, click on the 'Order Number' link.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
What do the different order status mean ?
</h5>
          <p>
<strong>
Payment Pending Authorization:
</strong> Your order has been logged and we are waiting for authorization from the payment gateway.
            <br /><strong>
Payment Authorized, Order under Processing:
</strong> Authorization has been received from the payment gateway and your order is being processed by the seller.
            <br /><strong>
Order Shipped:
</strong> Your order has been shipped by the seller and is on its way to the location specified by you for delivery.
            <br /><strong>
Order Cancelled:
</strong> The order was cancelled.
</p>
        </div>
        <br />
        <div className="row">
          <h5>
When and how can I cancel an order?
</h5>
          <p>
You can cancel your order before it reaches the "Order Shipped" state. To cancel, please Contact Us with the order number.
</p>
        </div>
        <hr />
        <hr />
      </div>
    );
  }
}
