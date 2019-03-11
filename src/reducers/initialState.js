const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  product: {
    productIsLoading: false,
    productsArray: [],
    getProductFailed: false,
    getProductSuccess: false,
    productCreateLoading: false,
    cart: []
  },
  cart: []
};

export default initialState;
