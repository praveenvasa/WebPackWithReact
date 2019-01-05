import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/store';


const store=configureStore;


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);

module.hot.accept();