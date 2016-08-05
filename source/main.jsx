import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga'
import {Router, Route, hashHistory} from 'react-router'

import Home from './components/home.jsx'

ReactGA.initialize('UA-81890211-1', {
  debug: false,
  titleCase: false
});

export class App extends React.Component {

  render() {
    return (
      <Router onUpdate={this._logPageView} history={hashHistory}>
        <Route path='/' component={Home} />
      </Router>
    );
  }

  _logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

}

ReactDOM.render(<App />, document.querySelector('#app-node'));
