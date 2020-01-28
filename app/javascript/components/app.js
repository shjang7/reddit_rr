import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../configure_store';
import LinksList from '../container/links/links_list';
import ShowLink from '../container/links/show_link';
import Login from '../container/users/login';
import Signup from '../container/users/signup';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ props => <LinksList {...props} /> } />
          <Route exact path="/links/:id" render={ props => <ShowLink {...props} /> } />
          <Route exact path="/login" render={ props => <Login {...props} /> } />
          <Route exact path="/signup" render={ props => <Signup {...props} /> } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
