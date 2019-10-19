import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { rehydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const root = document.getElementById('root');

// Serve from /dist in production, we want to hydrate instead of render (to server-rendering)
if (process.env.NODE_ENV === 'production') {
  console.info('rehydrate');
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(<App/>, root);
  });
} else {
  console.info('rendering')
  ReactDOM.render(<App/>, root);
}

if (module.hot) {
  console.info('Accept Hot reload')
  module.hot.accept();
}