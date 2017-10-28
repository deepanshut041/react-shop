import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';


var styles={
  "over":{
    "overflow-x":"auto"
  }
}

class Inventory extends Component{

	renderInventory(inventory){
		return(
      <tr key=this.inventory.$key>
        <th scope="row" className="text-center">this.inventory.$key</th>
        <th scope="row" className="text-center">this.inventory.customerId</th>
        <th scope="row" className="text-center">this.inventory.productID</th>
        <td className="text-center">this.inventory.orderAt</td>
        <th scope="row" className="text-center">this.inventory.shippedAt</th>
        <td scope="row" className="text-center">this.inventory.status</td>
        <td className="text-right">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">More</button>
          </div>
        </td>
      </tr>
			);
	}


	render(){
		return(
			<div style={styles.over}>
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th className="text-center">#id</th>
              <th className="text-center">CustomerId</th>
              <th className="text-center">ProductId</th>
              <th className="text-center">Order Date</th>
              <th className="text-center">Paid</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
					<tbody>
						{this.props.inventorys.map(this.renderInventory)}
					</tbody>
				</table>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex={-1}>Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
			</div>);
	}
}

function mapStateToProps({inventorys}) {
	return {inventorys};
}

export default connect(mapStateToProps)(Inventory);
