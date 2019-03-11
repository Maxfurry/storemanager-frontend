import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../Loader/Loading';
import * as actions from '../../actions/productAction';

import './style/index.scss';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productFile: '',
      productQuantity: '',
      productCategory: '',
      productPrice: '',
      productName: ''
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate(prevProps) {
    const { productIsLoading } = this.props.product;
    if (prevProps.product.productIsLoading !== productIsLoading && productIsLoading === true) {
      this.props.getProducts();
    }
  }

  addProduct = () => (
    <form className="pageContent" onSubmit={this.handleOnSubmit}>
      <input type="file" name="productPic" id="productPic" accept="image/*" onChange={this.handleFileOnchange} />
      <input type="text" id="productName" name="productName" placeholder="Item Name" value={this.state.productName} onChange={this.handleChange} required />
      <input type="text" id="productPrice" name="productPrice" placeholder="Price" value={this.state.productPrice} onChange={this.handleChange} required />
      <input type="text" id="productQuantity" name="productQuantity" placeholder="Quantity" value={this.state.productQuantity} onChange={this.handleChange} required />
      <input type="text" id="productCategory" name="productCategory" placeholder="Category" value={this.state.productCategory} onChange={this.handleChange} />
      <input type="submit" value="Create" />
    </form>
  );

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  }

  handleFileOnchange = (e) => {
    this.setState({
      productFile: e.target.files[0]
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.createProduct(this.state);

    e.target.productPic.value = '';
    this.setState({
      productQuantity: '',
      productCategory: '',
      productPrice: '',
      productName: '',
      productPic: ''
    });
  }

  listProducts = productsArray => (
    <table className="productTable">
      <tr>
        <th>Item Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      {!productsArray || !productsArray.length
        ? <tr><td>You have not added any product yet!</td></tr> : productsArray.map(product => (
          <Fragment key={product.product_id}>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td className="button">
                <select name="action" id="action">
                  <option>Actions</option>
                  <option value="view">View</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
          </Fragment>
        ))}
    </table>
  );

  sidebar = () => (
    <div className="adminSidebar">
      <div className="adminLogo">
        {/* <a href="" /> */}
      </div>
      <ul>
        <li><a href="#users">Users</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#sales">Sales Record</a></li>
      </ul>
    </div>
  );

  mainContenet = productsArray => (
    <div className="adminMainContainer">
      <div className="mainContent clearfix">
        <div id="users">
          <h2 className="pageHeader"> Users </h2>
        </div>
        <div id="products" className="target">
          <h2 className="pageHeader">Products</h2>
          <h3>Add Items</h3>
          {this.addProduct()}
          {this.props.product.productCreateLoading ? (<Loading size="tiny" />) : null}
          <div>
            <h3>Items List</h3>
            {this.listProducts(productsArray)}
          </div>
        </div>
        <div id="categories">
          <h2 className="pageHeader">Categories</h2>
        </div>
        <div id="sales">
          <h2 className="pageHeader">Sales Record</h2>
        </div>
      </div>
    </div>
  );

  render() {
    const { productsArray } = this.props.product;
    return (
      <div className="adminPanel clearfix">
        <ToastContainer autoClose={5000} />
        {this.sidebar()}
        {this.mainContenet(productsArray)}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.productReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export { AdminPage as AdminPageComponent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);

AdminPage.propTypes = {
  product: PropTypes.object.isRequired,
  productsArray: PropTypes.array,
  getProducts: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired
};

AdminPage.defaultProps = {
  productsArray: [],
};
