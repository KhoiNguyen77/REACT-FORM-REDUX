import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Form from './Components/Form';
import { store } from './REDUX/configStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Form></Form>
  </Provider>
);

