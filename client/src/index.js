import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.querySelector('#root'));