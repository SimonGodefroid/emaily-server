import { combineReducers } from 'redux';
import authReducer from './authReducer';

// the keys of this object will be the keys inside the state object
export default combineReducers({
	auth: authReducer
});
