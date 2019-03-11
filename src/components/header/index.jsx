/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon, Input, Image, Dropdown } from 'semantic-ui-react';

import { setToken } from '../../helpers/index';
import * as actions from '../../actions/productAction';

import './style/index.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0
    };

    this.dropDownOptions = this.dropDownOptions.bind(this);
  }

  componentDidMount() {
    this.getItemsCount();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.cart !== this.props.product.cart) {
      this.getItemsCount();
    }
  }

  handleOnClick = (e, { value }) => {
    if (value === 'sign out') {
      setToken('');
      location.href = '/';
    }

    if (value === 'dashboard') {
      location.href = '/admin';
    }
  }

  getItemsCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.length > 0) {
      this.setState(state => ({
        ...state,
        cartItems: cart.length
      }));
    } else {
      this.setState(state => ({
        ...state,
        cartItems: 0
      }));
    }
  }

  dropDownOptions = () => {
    const trigger = (
      <span className="profileImage">
        <Image avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/_ragzor/128.jpg" size="mini" className="userAvatar" />
        <Icon name="angle down" />
      </span>
    );

    const options = [
      { key: 'user', text: 'Account', icon: 'user', value: 'user' },
      { key: 'dashboard', text: 'Dashboard', icon: 'settings', value: 'dashboard' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 'sign out' },
    ];

    return <Dropdown trigger={trigger} options={options} pointing="top left" icon={null} onChange={this.handleOnClick} />;
  }

  render() {
    return (
      <div className="myHeader">
        <a href="/home">
          <span className="logo">STORE MANAGER</span>
        </a>
        <div className="headerActions">
          <Input icon placeholder="Search..." className="searchField">
            <input />
            <Icon name="search" className="searchIcon" />
          </Input>
          {this.dropDownOptions()}
          <a href="/cart">
            <Icon name="shopping cart" size="big" className="cartIcon" />
            <span className="cartCount">
              {' '}
              {this.state.cartItems}
              {' '}
            </span>
          </a>
        </div>
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.productReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export { Header as HeaderComponent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

Header.propTypes = {
  product: PropTypes.object.isRequired,
};
