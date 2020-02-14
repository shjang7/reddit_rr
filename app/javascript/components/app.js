import React from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from '../container/navigation';
import configureStore from '../configure_store';
import LinksList from '../container/links/links_list';
import ShowLink from '../container/links/show_link';
import Signup from '../container/registrations/signup';
import Login from '../container/sessions/login';
import NewLinks from '../container/links/new_links';
import NotFound from './not_found';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={ store }>
      <Navigation history={ history }/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ props => <LinksList {...props} /> } />
          <Route exact path="/links/new" render={ props => <NewLinks {...props} /> } />
          <Route exact path="/links/:id" render={ props => <ShowLink {...props} /> } />
          <Route exact path="/login" render={ props => <Login {...props} /> } />
          <Route exact path="/signup" render={ props => <Signup {...props} /> } />
          <Route exact path="/not_found" render={ props => <NotFound {...props} /> } />
          <Redirect to='/not_found' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
