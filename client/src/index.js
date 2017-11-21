import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

// store takes all the reducers and initial state

// we create the redux store...
const store = createStore(() => [], {}, applyMiddleware());

// ... we pass the store to the app through the provider as props
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
