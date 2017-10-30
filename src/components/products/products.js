import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';


var styles={ }

class Inventory extends Component{

	render(){
		return(
			<div>

			</div>);
	}
}

function mapStateToProps({inventorys}) {
	return {inventorys};
}

export default connect(mapStateToProps)(Inventory);
