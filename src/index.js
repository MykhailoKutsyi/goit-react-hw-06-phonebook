import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './components/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
