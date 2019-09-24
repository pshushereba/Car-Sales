import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Provider
import {Provider} from 'react-redux';

// Import createStore
import {createStore} from 'redux';

// Import Reducers
import {featuresReducer} from './reducers/featuresReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featuresReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
