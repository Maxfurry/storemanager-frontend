/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import * as actions from '../../actions/productAction';

import './style/index.scss';

import plusIcon from '../../images/plus.svg';
import minusIcon from '../../images/minus.svg';
import item from '../../images/item-1.png';

class cartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.getCartItems(),
      totalPrice: 0
    };
    this.checkPrice = this.checkPrice.bind(this);
  }

  componentDidMount() {
    this.checkPrice();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.cart !== this.props.product.cart) {
      this.updateCartState();
      this.checkPrice();
    }
  }

  getCartItems = () => JSON.parse(localStorage.getItem('cart'))

  increaseCount = (id) => {
    let value;
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart[id].quantity2boy) {
      cart[id].quantity2boy = 2;
      value = 2;
    } else {
      const quantity = parseInt(cart[id].quantity2boy, 10);
      value = quantity + 1;
      cart[id].quantity2boy = value;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartState();
    this.checkPrice();
  }

  decreaseCount = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[id].quantity2boy > 1) {
      const quantity = parseInt(cart[id].quantity2boy, 10);
      const value = quantity - 1;
      cart[id].quantity2boy = value;
      localStorage.setItem('cart', JSON.stringify(cart));
      this.updateCartState();
      this.checkPrice();
    }
  }

  checkPrice = () => {
    let total = 0;
    let amount = 0;
    let quantity2boy, price;
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.map((product) => {
      ({ quantity2boy, price } = product);
      price = price.slice(1);
      price = parseInt(price, 10);
      if (!quantity2boy) {
        amount = 1;
      } else {
        amount = quantity2boy;
      }
      total += (price * amount);
      return total;
    });

    this.setState(state => ({
      ...state,
      totalPrice: total
    }));
  }

  updateCartState = () => {
    this.setState(state => ({
      ...state,
      cartItems: JSON.parse(localStorage.getItem('cart'))
    }));
  }

  checkoutProducts = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    // eslint-disable-next-line no-restricted-globals
    location.replace('/home');
  }

  displayProducts = cartItems => (
    cartItems.map(product => (
      <div className="eachItem" key={cartItems.indexOf(product)}>
        <div className="buttons">
          <span className="deleteBtn" onClick={() => this.props.removeFromCart(cartItems.indexOf(product))} />
        </div>

        <div className="productImage">
          <img src={item} alt="" />
        </div>

        <div className="description">
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>

        <div className="quantity">
          <button className="minusBtn" type="button" name="button" onClick={() => this.decreaseCount(cartItems.indexOf(product))}>
            <img src={minusIcon} alt="" />
          </button>
          <input type="text" name="name" value={product.quantity2boy || 1} />
          <button className="plusBtn" type="button" name="button" onClick={() => this.increaseCount(cartItems.indexOf(product))}>
            <img src={plusIcon} alt="" />
          </button>
        </div>
        <div className="totalPrice">{`${product.quantity} pieces in stock`}</div>
      </div>
    ))
  );

  render() {
    const { cartItems } = this.state;
    return (
      <div className="cartContainer">
        <div className="above">
          <p>Home > Shopping Cart</p>
          <h1>Shopping Cart</h1>
        </div>
        <div className="cartComponents">
          <div className="cartOverview">
            <div className="itemsInCart">
              {cartItems && cartItems.length
                ? this.displayProducts(cartItems) : <h1>No Item added to cart yet!</h1>}
            </div>
          </div>

          {cartItems && cartItems.length
            ? (
              <Fragment>
                <div className="price">
                  <h2>TotalPrice</h2>
                  <h1 className="priceClass">{this.state.totalPrice}</h1>
                </div>
                <div className="clearfix" />
                <Button floated="right" icon labelPosition="left" primary size="big" onClick={() => this.checkoutProducts()}>
                  <Icon name="cart arrow down" />
                  Checkout
                </Button>
              </Fragment>
            ) : null}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.productReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export { cartComponent as shoppingCartComponent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartComponent);

cartComponent.propTypes = {
  product: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
