import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
// import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/auth/Register';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/layouts/not_found';
// import LinksList from './container/links/links_list';
// import Navigation from './container/layouts/navigation';
// import ShowLink from './container/links/show_link';
// import Login from './container/sessions/login';
// import NewLinks from './container/links/new_links';
// import EditLinks from './container/links/edit_links';
// import Error from './container/layouts/error';

import './assets/application.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <section id="main_content" className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

// return (
//   <Provider store={ store }>
//     <div id="main_content" className="container">
//       <Router>
//         <>
//           <Navigation />
//           <Switch>
//             <Route exact path="/" render={ props => <LinksList {...props} /> } />
//             <Route exact path="/links/new" render={ props => <NewLinks {...props} /> } />
//             <Route exact path="/links/edit/:id" render={ props => <EditLinks {...props} /> } />
//             <Route exact path="/links/:id" render={ props => <ShowLink {...props} /> } />
//             <Route exact path="/login" render={ props => <Login {...props} /> } />
//           </Switch>
//         </>
//       </Router>
//     </div>
//   </Provider>
// );
export default App;
