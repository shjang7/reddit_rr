import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './common/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NavBar from './components/layouts/NavBar';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/layouts/not_found';
// import LinksList from './container/links/links_list';
// import Navigation from './container/layouts/navigation';
// import ShowLink from './container/links/show_link';
// import Login from './container/sessions/login';
// import NewLinks from './container/links/new_links';
// import EditLinks from './container/links/edit_links';

import './assets/application.scss';

if (localStorage.toekn) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

//             <Route exact path="/" render={ props => <LinksList {...props} /> } />
//             <Route exact path="/links/new" render={ props => <NewLinks {...props} /> } />
//             <Route exact path="/links/edit/:id" render={ props => <EditLinks {...props} /> } />
//             <Route exact path="/links/:id" render={ props => <ShowLink {...props} /> } />
export default App;
