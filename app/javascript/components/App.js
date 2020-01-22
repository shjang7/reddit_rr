import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => ("Home!") }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
