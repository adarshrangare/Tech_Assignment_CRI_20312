import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,SET_AUTH } from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: '',
};

export const authReducer = (state = initialState, action) => {
  // console.log({payload: action?.payload})
  // console.log({token: action?.payload?.token})
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action?.payload.token,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    case SET_AUTH:
        return {
          ...state,
          isAuth: action.payload.isAuth,
          token: action.payload.token,
        };  
    default:
      return state;
  }
};


