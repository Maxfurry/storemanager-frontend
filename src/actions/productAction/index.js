import { fetchProducts } from '../../helpers/apiRequests';
import actionTypes from './actionTypes';

const productFetched = payload => ({
  type: actionTypes.PRODUCT_FETCHED,
  payload
});

const productLoading = () => ({
  type: actionTypes.PRODUCT_LOADING
});

const fetchFailed = payload => ({
  type: actionTypes.PRODUCT_FETCH_FAILED,
  payload
});

const getProducts = () => async (dispatch) => {
  try {
    dispatch(productLoading());
    const res = await fetchProducts();
    dispatch(productFetched(res));
  } catch (error) {
    dispatch(fetchFailed(error.res));
  }
};

export {
  productFetched,
  fetchFailed,
  getProducts,
  productLoading
};
