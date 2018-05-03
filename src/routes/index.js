import React from 'react'
import { createHashHistory } from 'history';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Login from '../modules/login';
import SignUp from '../modules/signUp';
import Profile from '../modules/profile';

import createStore from '../store/createStore'

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
