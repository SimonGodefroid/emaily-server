import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// async await based
// if there is only one line to the arrow function codeblock we can remove the {} and the return
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys/', values);
	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// promise based
// export const fetchUser = () => {
// 	return function(dispatch) {
// 		axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }));
// 	};
// };
// old way without redux-thunk
// const fetchUser = () => {
// 	const request = axios.get('/api/current_user');
// 	return {
// 		type: FETCH_USER,
// 		payload: request
// 	};
// };
/////////////////////////////////////////////////////////
