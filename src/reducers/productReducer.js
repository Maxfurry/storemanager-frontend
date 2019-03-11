import actionTypes from '../actions/productAction/actionTypes';
import initialState from './initialState';

const {
  PRODUCT_FETCHED,
  PRODUCT_LOADING,
  PRODUCT_FETCH_FAILED,
  PRODUCT_CREATED,
  ADD_TO_CART
} = actionTypes;

const { product } = initialState;

export default (state = product, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        productIsLoading: true
      };
    case PRODUCT_FETCHED:
      return {
        ...state,
        productIsLoading: false,
        getProductSuccess: true,
        productsArray: action.payload.data.products
      };
    case PRODUCT_FETCH_FAILED:
      return {
        ...state,
        productIsLoading: false
      };
    case PRODUCT_CREATED:
      return {
        ...state,
        productIsLoading: true
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};
