import { fetchProducts, createProducts, uploadImage } from '../../helpers/apiRequests';
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

const productCreated = () => ({
  type: actionTypes.PRODUCT_CREATED
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

const createProduct = state => async (dispatch) => {
  const {
    productFile,
    productName,
    productPrice,
    productQuantity,
    productCategory
  } = state;

  let url = '';

  try {
    const res = await uploadImage(productFile);
    url = res.data.secure_url;
  } catch (error) {
    return dispatch(fetchFailed(error.res));
  }

  const productDetails = {};
  productDetails.name = productName;
  productDetails.price = productPrice;
  productDetails.quantity = productQuantity;
  productDetails.category = productCategory;
  productDetails.url = url;

  try {
    dispatch(productLoading());
    const res = await createProducts(productDetails);
    dispatch(productCreated(res));
  } catch (error) {
    dispatch(fetchFailed(error.res));
  }
};

export {
  productFetched,
  fetchFailed,
  getProducts,
  productLoading,
  createProduct,
  productCreated
};
