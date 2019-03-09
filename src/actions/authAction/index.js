import { authenticateUser } from '../../helpers/apiRequests';
import { setToken } from '../../helpers';
import actionTypes from './actionTypes';
import triggerLoading from './loading';

const {
  AUTH_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} = actionTypes;

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
});

export const userAddedSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const userAddedFailed = payload => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const userLogin = user => async (dispatch) => {
  try {
    dispatch(triggerLoading(AUTH_LOADING));
    const response = await authenticateUser(user);
    setToken(response.data.token);
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFailure(error.response));
  }
};
