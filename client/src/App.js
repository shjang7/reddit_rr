import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './common/setAuthToken'
// import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import NavBar from './components/layouts/NavBar'
import Alert from './components/layouts/Alert'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
import NotFound from './components/layouts/NotFound'

import './assets/application.scss'

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      store.dispatch(loadUser())
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts/:id" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  )
}
// <PrivateRoute exact path="/posts/:id/edit" component={Dashboard} />

export default App
