import { toast } from 'react-toastify';
import { fetchProducts, createProducts, uploadImage } from '../../helpers/apiRequests';
import actionTypes from './actionTypes';

const productFetched = payload => ({
  type: actionTypes.PRODUCT_FETCHED,
  payload
});

const productLoading = () => ({
  type: actionTypes.PRODUCT_LOADING
});

const productCreateLoading = () => ({
  type: actionTypes.PRODUCT_CREATE_LOADING
});

const fetchFailed = payload => ({
  type: actionTypes.PRODUCT_FETCH_FAILED,
  payload
});

const productCreated = () => ({
  type: actionTypes.PRODUCT_CREATED
});

const itemAdded = payload => ({
  type: actionTypes.ADD_TO_CART,
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

const createProduct = state => async (dispatch) => {
  const {
    productFile,
    productName,
    productPrice,
    productQuantity,
    productCategory
  } = state;

  let url = '';

  dispatch(productCreateLoading());

  try {
    const res = await uploadImage(productFile);
    url = res.data.secure_url;
  } catch (error) {
    toast.error('Upload Failed');
    return dispatch(fetchFailed(error.res));
  }

  const productDetails = {};
  productDetails.name = productName;
  productDetails.price = productPrice;
  productDetails.quantity = productQuantity;
  productDetails.category = productCategory;
  productDetails.url = url;

  try {
    const res = await createProducts(productDetails);
    toast.success('Product Added Successfull');
    dispatch(productCreated(res));
  } catch (error) {
    dispatch(fetchFailed(error.res));
    toast.error(error.response.data.message);
  }
};

const addToCart = product => async (dispatch) => {
  let cart = [];
  let check = 0;

  if (!localStorage.getItem('cart')) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    cart = JSON.parse(localStorage.getItem('cart'));
    toast.success('Product Added Successfull');
    return dispatch(itemAdded(cart));
  }

  cart = JSON.parse(localStorage.getItem('cart'));
  await cart.map((pro) => {
    if (pro.product_id === product.product_id) {
      check = 1;
    }
    return check;
  });

  if (check === 1) {
    toast.info('Product already added to cart');
  } else {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(itemAdded(cart));
    toast.success('Product Added Successfull');
  }
};

const removeFromCart = id => async (dispatch) => {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.splice(id, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem('cart'));
  toast.success('Product Removed Successfull');
  dispatch(itemAdded(cart));
};

export {
  productFetched,
  fetchFailed,
  getProducts,
  productLoading,
  createProduct,
  productCreated,
  addToCart,
  itemAdded,
  removeFromCart,
  productCreateLoading
};
