import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './components/App';
import Text from './components/Text';

class AppRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='/text' component={Text} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
