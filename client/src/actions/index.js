import axios from 'axios';
import { FETCH_USER } from './types';

// async await based
// if there is only one line to the arrow function codeblock we can remove the {} and the return
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

// promise based
// export const fetchUser = () => {
// 	return function(dispatch) {
// 		axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }));
// 	};
// };
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// old way without redux-thunk
// const fetchUser = () => {
// 	const request = axios.get('/api/current_user');
// 	return {
// 		type: FETCH_USER,
// 		payload: request
// 	};
// };
/////////////////////////////////////////////////////////
