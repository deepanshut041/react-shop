import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';


class AddProduct extends Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var product={
      category:this.refs.category.value,
      subCategory:this.refs.subCategory.value,
      name:this.refs.name.value,
      brand:this.refs.brand.value,
      barcode:this.refs.barcode.value,
      quantity:this.refs.quantity.value,
      unitPrice:this.refs.unitPrice.value,
      sellPrice:this.refs.sellPrice.value,
      color:this.refs.color.value,
      size:this.refs.size.value,
      description:this.refs.description.value
    }

    if (product.barcode) {
      this.refs.category.value='';
      this.refs.subCategory.value='';
      this.refs.name.value='';
      this.refs.brand.value='';
      this.refs.barcode.value='';
      this.refs.quantity.value=1 ;
      this.refs.unitPrice.value='';
      this.refs.sellPrice.value='';
      this.refs.size.value='';
      this.refs.color.value='';
      this.refs.description.value='';
      dispatch(actions.startAddProduct(product))
    } else {
      this.refs.size.focus();
    }
  }


  render(){
    return(
      <div>
        <h4>Add Product</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Category</label>
            <div className="col-10">
              <select ref="category">
                <option value={0}>Select</option>
                <option value="men">Mens</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">SubCategory</label>
            <div className="col-10">
              <select ref="subCategory">
                <option value={0}>Select</option>
                <option >78</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-2 col-form-label">Name</label>
            <div className="col-10">
              <input className="form-control" ref="name" type="text" placeholder="Name"  />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-2 col-form-label">Brand</label>
            <div className="col-10">
              <input className="form-control" ref="brand" type="text" placeholder="Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-2 col-form-label">Barcode</label>
            <div className="col-10">
              <input className="form-control" type="text" ref="barcode" placeholder="Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-number-input" className="col-2 col-form-label">Quantity</label>
            <div className="col-10">
              <input className="form-control" type="number" ref="quantity" defaultValue={1} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">UnitPrice</label>
            <div className="col-10">
              <input className="form-control" ref="unitPrice" type="number" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">SellPrice</label>
            <div className="col-10">
              <input className="form-control" ref="sellPrice" type="number" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Size</label>
            <div className="col-10">
              <input className="form-control" ref="size" type="number"  />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-color-input" className="col-2 col-form-label">Color</label>
            <div className="col-10">
              <input className="form-control" type="string" ref="color" defaultValue="#563d7c"  />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea">Description</label>
            <textarea className="form-control" ref="description" rows={3} />
          </div>
          <div className="text-right"><button type="submit" className="btn btn-success" value="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(AddProduct);
