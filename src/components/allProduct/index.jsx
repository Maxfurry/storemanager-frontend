import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

import './style/index.scss';

import * as actions from '../../actions/productAction';

class FetchProducts extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { productsArray } = this.props.product;
    return (
      <div className="productContainer">
        <div>
          <p>Home</p>
          <h1>Popular</h1>
        </div>
        <div className="myProducts">
          {productsArray.map(product => (
            <Fragment key={product.product_id}>
              {product.quantity > 1 ? (
                <Card className="myCard">
                  <Image src={product.url} className="previewImage" />
                  <Card.Content className="productDetails">
                    <Card.Header className="productTitle">{product.name}</Card.Header>
                    <Card.Meta className="productPrice">
                      <span className="date">{product.price}</span>
                    </Card.Meta>
                    <Button animated="vertical" className="addToCart">
                      <Button.Content visible>Shop</Button.Content>
                      <Button.Content hidden>
                        <Icon name="shop" />
                      </Button.Content>
                    </Button>
                  </Card.Content>
                </Card>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.productReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export { FetchProducts as FetchProductsComponent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchProducts);

FetchProducts.propTypes = {
  product: PropTypes.object.isRequired,
  productsArray: PropTypes.array,
  getProducts: PropTypes.func.isRequired
};

FetchProducts.defaultProps = {
  productsArray: [],
};
