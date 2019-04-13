import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './apollo';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
