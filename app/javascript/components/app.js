import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../configure_store';
import LinksList from '../container/links_list';

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => ("Home!") } />
            <Route path="/links" render={ () => <LinksList /> } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
