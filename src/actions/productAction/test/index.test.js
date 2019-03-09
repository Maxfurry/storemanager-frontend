import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../actionTypes';
import * as request from '../../../helpers/apiRequests';
// import { loginOkResponse, socialToken, mockPath } from '../../../mockData';
import {
  productFetched,
  productLoading,
  fetchFailed,
  getProducts
} from '..';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });

describe('Unit test for SocialLogin Action', () => {
  const payload = {};

  const error = {
    res: 'authentication failed'
  };

  beforeEach(() => {
    store.clearActions();
  });

  it('should return an action, SOCIAL_AUTH_SUCCESS when social media authentication is successfull', () => {
    expect(productFetched(payload))
      .toEqual({
        type: actions.PRODUCT_FETCHED,
        payload
      });
  });

  it('should return an action, SOCIAL_AUTH_SUCCESS when social media authentication fails', () => {
    expect(fetchFailed(error))
      .toEqual({
        type: actions.PRODUCT_FETCH_FAILED,
        payload: error
      });
  });

  it('should return an action, SOCIAL_AUTH_SUCCESS when social media authentication fails', () => {
    expect(productLoading(error))
      .toEqual({
        type: actions.PRODUCT_LOADING
      });
  });

  it('should return an action if authentication response status is 200', async () => {
    request.fetchProducts = jest.fn(() => Promise.resolve({
      status: 200
    }));

    const expectedAction = [{
      type: actions.PRODUCT_LOADING
    },
    {
      payload: {
        status: 200
      },
      type: actions.PRODUCT_FETCHED
    }];
    await store.dispatch(getProducts());
    expect(store.getActions()).toEqual(expectedAction);
    expect(request.fetchProducts).toHaveBeenCalled();
  });

  it('should return an action if authentication response status is 500', async () => {
    request.fetchProducts = jest.fn(() => { throw error; });

    const expectedAction = [{
      type: actions.PRODUCT_LOADING
    },
    {
      type: actions.PRODUCT_FETCH_FAILED,
      payload: error.res
    }];
    await store.dispatch(getProducts());
    expect(store.getActions()).toEqual(expectedAction);
    expect(request.fetchProducts).toHaveBeenCalled();
  });
});
