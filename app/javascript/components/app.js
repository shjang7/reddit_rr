import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../configure_store';
import LinksList from '../container/links_list';
import Login from '../components/login';
import Signup from '../components/signup';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ props => <LinksList {...props} /> } />
          <Route exact path="/login" render={ props => <Login {...props} /> } />
          <Route exact path="/signup" render={ props => <Signup {...props} /> } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
