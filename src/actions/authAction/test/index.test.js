/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '..';
import actionTypes from '../actionTypes';
import * as auth from '../../../helpers/apiRequests';
import NETWORK_ERROR from '../../networkError/actionType';

const payload = {
    name: 'fury',
    password: 'password123R'
  },
  loginOkResponse = {
    status: 200,
    success: true,
    data: {
      token: 'sampleToken',
      message: 'You have sccessfully login'
    }
  },
  mockResponse = loginOkResponse.data.message;

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('user authentication actions Signup', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.SIGNUP_SUCCESS} is fired`, () => {
    expect(actions.userAddedSuccess(payload)).toEqual({
      type: actionTypes.SIGNUP_SUCCESS,
      payload
    });
  });

  it(`should return an action object once ${actionTypes.SIGNUP_FAILURE} is fired`, () => {
    expect(actions.userAddedFailed(payload)).toEqual({
      type: actionTypes.SIGNUP_FAILURE,
      payload
    });
  });

  it('should call the auth start dispatch function', () => {
    auth.authenticateUser = jest.fn().mockResolvedValue(mockResponse);
    actions.userLogin(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.AUTH_LOADING });
  });

  it('should dispatch signup failure when error occurs', async () => {
    auth.registerUser = jest.fn(() => {
      throw { response: mockResponse };
    });
    try {
      await actions.userLogin(payload)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.SIGNUP_FAILURE,
        payload: mockResponse,
      });
    }
    store.clearActions();
  });

  it('should throw error', async () => {
    auth.registerUser = jest.fn(() => {
      throw {};
    });
    try {
      await actions.userLogin(payload)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(3);
      expect(dispatch).toBeCalledWith({
        type: NETWORK_ERROR,
        payload: mockResponse,
      });
    }
    store.clearActions();
  });
});

describe('user authentication actions login', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.LOGIN_SUCCESS} is fired`, () => {
    expect(actions.loginSuccess(payload)).toEqual({
      type: actionTypes.LOGIN_SUCCESS,
      payload,
    });
  });

  it(`should return an action object once ${actionTypes.LOGIN_FAILURE} is fired`, () => {
    expect(actions.loginFailure(payload)).toEqual({
      type: actionTypes.LOGIN_FAILURE,
      payload
    });
  });

  it('should call the auth start dispatch function', () => {
    auth.authenticateUser = jest.fn().mockResolvedValue(mockResponse);
    actions.userLogin()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.AUTH_LOADING });
  });

  it('should call the login success dispatch function', async () => {
    auth.authenticateUser = jest.fn().mockResolvedValue(loginOkResponse);
    await actions.userLogin()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: actionTypes.LOGIN_SUCCESS, payload: loginOkResponse });
  });

  it('should throw error', async () => {
    auth.authenticateUser = jest.fn(() => {
      throw new Error();
    });
    try {
      await actions.userLogin()(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.LOGIN_FAILURE,
        payload: new Error()
      });
    }
    store.clearActions();
  });
});
