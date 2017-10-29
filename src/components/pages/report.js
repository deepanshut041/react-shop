import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

var styles={
  "conatiner":{
    "padding": "50px",
    "margin": "0px 100px",
    "background": "white"
  }
}
export default class Report extends Component{
  render(){
    return(

      <div>
        <div className="container" style={styles.container}>
          <p>
fashionista is committed to removing infringing products from the site. To facilitate this, fashionista has put in place a fashionista Infringement Verification process so that intellectual property owners could easily report listings that infringe their rights. It is in fashionista's interest to ensure that infringing products are removed from the site, as they erode Buyer and Seller trust.
</p>
        </div>
        <br />
        <br />
        <div className="container">
          <h4>Policy</h4>
          <p>
fashionista respects third party Intellectual Property rights and actively supports protection of all third party Intellectual Property including Copyrights and Trademarks (â€œIPâ€). It is our policy to expeditiously respond to clear notices of alleged IP infringement.
            <br />
<br />
If we receive proper notification of IP infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity. For a detailed term of use of our website, please visit http://www.fashionista.com/s/terms
</p>
        </div>
        <br />
        <br />
        <div className="container">
          <h4>
How to report a listing
</h4>
          <p>
If you have a good faith belief that your IP right has been infringed by any of our sellers, you may follow the below process: We require that the Intellectual Property right owner or authorized agent provide the following details and email it to infringement@fashionista.com.The email should contain the below information.
</p>
          <ol>
            <li>
Identification or description of the copyrighted work/ trademark that has been infringed. Clear identification or description of where the material that you claim is infringing is located on www.fashionista.com with adequate particulars. Product ID / website links of infringing products (in case of copyright infringement)
<br />
<br />
              (Note: fashionista is unable to process requests which do not specify exact product IDs or URLs. Please do not provide links to browse pages or links of search queries as these pages are dynamic and their contents change with time).
</li>
            <li>
Your address, telephone number, and email address.
</li>
            <li>
A statement by you that you have a good faith belief that the use of the material complained of is not authorized by the copyright or intellectual property owner, its agent, or the law.
</li>
            <li>
A statement by you, that the information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.
</li>
            <li>
Brand Name (in case of Trademark infringement)
</li>
            <li>
Details of the intellectual property being infringed (Provide copyrighted images or trademark certificates as attachments)
</li>
          </ol>
        </div>

      </div>

    );
  }
}
