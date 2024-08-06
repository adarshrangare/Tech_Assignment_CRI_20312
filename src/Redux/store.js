import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './AuthReducer/reducer';
import { movieReducer } from './MovieReducer/reducer';
import { setAuth } from './AuthReducer/action';
const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});



const store = createStore(rootReducer, applyMiddleware(thunk));

const token = localStorage.getItem('authToken');
// console.log({token})
if (token) {
  store.dispatch(setAuth({ isAuth: true, token })); // Adjust action import as needed
}

export default store;