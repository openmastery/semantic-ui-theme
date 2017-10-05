import React                 from 'react';
import ReactDOM              from 'react-dom';
import {Provider}            from 'react-fela';

import App                   from './App';
import createRenderer        from './renderer'
import registerServiceWorker from './registerServiceWorker';

const renderer = createRenderer();
require('../node_modules/semantic-ui-css/semantic.min.css');

ReactDOM.render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
