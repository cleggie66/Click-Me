import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReactProvider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <ReactProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactProvider>,
  document.getElementById('root')
);
