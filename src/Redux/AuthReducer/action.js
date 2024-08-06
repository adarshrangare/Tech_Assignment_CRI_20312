
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_AUTH } from './actionTypes';
import axios from 'axios';


export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});


export const setAuth = (authData) => ({
  type: SET_AUTH,
  payload: authData,
});


export const login = (email, password) =>async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://reqres.in/api/login', { email, password });

    // console.log(response);
    const { token } = response?.data;
    localStorage.setItem('authToken', token);
    dispatch(loginSuccess(token));
    return {success:true};
  } catch (error) {

    dispatch(loginFailure());
    return {success:false};
  }
};
