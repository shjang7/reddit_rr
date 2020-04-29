import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './common/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import NavBar from './components/layouts/NavBar'
import Alert from './components/layouts/Alert'
import Dashboard from './components/dashboard/Dashboard'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
import NotFound from './components/layouts/not_found'

import './assets/application.scss'

if (localStorage.toekn) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  )
}

//             <Route exact path="/" render={ props => <LinksList {...props} /> } />
//             <Route exact path="/links/new" render={ props => <NewLinks {...props} /> } />
//             <Route exact path="/links/edit/:id" render={ props => <EditLinks {...props} /> } />
//             <Route exact path="/links/:id" render={ props => <ShowLink {...props} /> } />
export default App
