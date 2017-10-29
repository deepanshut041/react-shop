import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "conatiner":{
    "padding": "50px",
    "margin": "0px 100px",
    "background": "white"
  }
}
export default class Cancellation extends Component{
  render(){
    return(
<div className="container" style={styles.container}>
        <div className="row">
          <h3>
Returns &amp; Cancellations
</h3>
          <br />
          <br />
          <hr />
        </div>
        <hr />
        <br />
        <div className="row">
          <h4>CANCELLATIONS</h4>
          <br />
          <hr />
        </div>
        <br />
        <div className="row">
          <h5>
How do I cancel an order?
</h5>
          <p>
You can cancel your order online before the product has been shipped. Your entire order amount will be refunded.
            <br />In case the item you have ordered has been shipped but has not yet been delivered to you, you may still cancel the order online. Your refund will be processed once we receive the originally ordered item back from the courier.
            <br />
<br />
Unfortunately, an order cannot be cancelled once the item has been delivered to you.
            <br />
<br />
<strong>
In order to cancel an item in your order:
</strong>
            <br />
</p>
<ul>
            <li>
Log into your fashionista account and go to the 'My Orders' page
</li>
            <li>
Identify the item you want to cancel and click on the corresponding 'View Details' link
</li>
            <li>
In the detailed order page, you will see 'Cancel' links against each of the items in that order
</li>
            <li>
              Click on the 'Cancel' link, indicate the reason for cancellation, choose a mode of refund and confirm cancellation
            </li>
            <li>
Once your cancellation request is created, we will ensure that the cancellation is processed as soon as possible
</li>
          </ul>
          <p />
        </div>
        <br />
        <div className="row">
          <h5>
How long will it take to process my cancellation request?
</h5>
          <p>Once you request the cancellation of item(s) in your order, it will take us a maximum of 1-2 business days to cancel the order and initiate a refund. You will be notified of the same by email.
            <br />
<br />
If the Order Status shows the item(s) in your order as 'Shipped', we will process your cancellation request directly with our logistics partner. Your refund will be processed soon after we receive the cancelled items back from the courier.
            <br />
<br />
In case of sellers with fashionista Advantage the refund mode will be fashionista Wallet. The refunded amount will be made available immediately.
            <br />
<br />
However, if you opt for having the money transferred back to the source of transaction, it may take up to 7-10 business days for the respective banks to process the refund. Please get in touch with the banks directly in case of any delays post confirmation of cancellation/refund by fashionista.
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
Why do I see a disabled 'Cancel' link?
</h5>
          <p>
<br />
A disabled 'Cancel' link can mean the following things:
</p>
          <ul>
            <li>
The item is being shipped together with another order of yours
</li>
            <li>
The item is non-refundable (eg. e-Gift Vouchers)
</li>
          </ul>
          <p>
In any of the above cases, you can get in touch with our Customer Support for more information
</p>
        </div>
        <br />
        <br />
        <div className="row">
          <h4>RETURNS</h4>
          <br />
          <hr />
        </div>
        <br />
        <br />
        <div className="row">
          <h5>
What is the Return policy period applicable for different categories?
</h5>
          <p>
Return Period after Delivery is applicable if product received is Defective or Damaged or Not as Described.<br />
            <br />
If you have received a damaged or defective product or if it is not as described, you can raise a replacement request on the Website/App/Mobile site within the applicable Returns Policy period. In a rare event of the replacement being defective/damaged or not as described on the product page, a full refund will be provided by the seller once they receive the product.
            <br />
<br />
View list of all non-returnable products here.
            <br />
<br />
For products where installation is provided by fashionista:
<br />
</p>
          <ol>
            <li>
Please do not open the product packaging by yourself. fashionista authorised personnel shall help in unboxing and installation of the product.
</li>
            <li>
The return period for such products commences from the date of installation.
</li>
          </ol>
        </div>
        <br />
        <div className="row">
          <h5>
How does fashionista help in resolving any issue with a product purchased on fashionista?
</h5>
          <p>If you're facing any issues with a product purchased on fashionista, we shall help by verifying and trying to resolve your product issue as part of the return verification process. The Issue resolution steps may be shared with you as self-help, or with assistance over call or a fashionista (or partner) personnel may visit your place.The seller will arrange for a replacement if the issue has not been resolved.
            <br />
<br />
Issue resolution steps will be available for products like mobiles, tablets, laptops, large appliances, electronics, home appliances, furniture etc.
            <br />
<br />
In case the item is not in stock or has been permanently discontinued, the refund for the entire product or part(s) of the product will be provided by the seller.
          </p>
        </div>
        <br />
        <div className="row">
          <h5>
What is fashionista's Friendly Returns policy?
</h5>
          <p>
At fashionista, we understand how much you value your every purchase. And we are committed to making your shopping experience with us as delightful as possible.
            <br />
<br />
Therefore, in the rare event that you are not fully satisfied with what you ordered, just return it to us. You can conveniently initiate the return on our Website/App/Mobile site. We will ensure you get a resolution as quickly as possible. Our Returns policy may vary slightly depending on the product and seller.
            <br />
<br />
We assure you that all products sold on fashionista are brand new and 100% genuine. In case the product you received is 'Damaged', 'Defective' or 'Not as Described', our Friendly Returns policy has got you covered.
            <br />
<br />
Possible resolution could be Replacement, Exchange (only for Apparel and Footwear) or Refund in case we are unable to provide a Replacement/Exchange.
            <br />
<br />
All this is backed by fashionista's Replacement Guarantee. Kindly click here to know the return policy period applicable for different categories.
            <br />
<br />
In any case, all your purchases on fashionista are backed by Buyer Protection for 45 days from the date of delivery, in case you face any issues.
            <br />
<br />
<strong>Replacement</strong>
            <br />
If you have received an item in a 'Damaged' or 'Defective' condition, or it is 'Not as Described' by the Seller, you may request a replacement at no extra cost. Return Policy depends on the product category and the seller and the terms may differ. Please check the respective seller's return policy on the product page when buying or before initiating a return for a replacement. Replacement is subject to availability of stock with the Seller. If the product is out of stock, you will receive a full refund, no questions asked.
            <br />
<br />
<strong>Exchange</strong>
<br />
            If you are not satisfied with the Clothing and Footwear item delivered, you can request an exchange in a different size or color. All this again, at no extra cost to you. Be sure to check the seller's Return Policy when buying or before initiating a return for exchange. Exchange is subject to availability of stock with the Seller. If the product is out of stock, you will receive a full refund, no questions asked.
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
Do I get 30 Day Returns on products with the 'fashionista Advantage' badge?
</h5>
          <p>fashionista Advantage has nothing to do with the Replacement Policy. Product replacements are governed by fashionista's Replacement Guarantee. You are eligible for product replacement if the product you've received is damaged or defective or not as described.
            <br />
<br />
Please check the respective seller's return policy on the product page when buying or before initiating a return.
            <br />
<br />
In case, a replacement cannot be issued, a refund will be provided. Know more about return policy period applicable for different categories here.
          </p>
        </div>
        <br />
        <hr />
      </div>
    );
  }
}
