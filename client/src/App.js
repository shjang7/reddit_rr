import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './container/layouts/navigation';
import configureStore from './configure_store';
import LinksList from './container/links/links_list';
import ShowLink from './container/links/show_link';
import { Provider } from 'react-redux';
import Register from './components/auth/Register';
import Login from './container/sessions/login';
import NewLinks from './container/links/new_links';
import EditLinks from './container/links/edit_links';
import Error from './container/layouts/error';
import NotFound from './components/layouts/not_found';
import { loadUser } from './actions/auth';

const store = configureStore();

const App = () => {
  const element = <h1>Hello, world</h1>;
  return (
    <Provider store={ store }>
      <Router>
        <>
          <section id="main_content" className="container">
            <Route exact path="/register" component={Register} />
          </section>
        </>
      </Router>
    </Provider>
  );
}

// <Redirect to='/not_found' />

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
//             <Route exact path="/signup" render={ props => <Register {...props} /> } />
//             <Route exact path="/not_found" render={ props => <NotFound {...props} /> } />
//           </Switch>
//         </>
//       </Router>
//     </div>
//   </Provider>
// );
export default App;
