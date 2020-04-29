import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import NotFound from './components/layouts/not_found';
import Register from './components/auth/Register';
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
    <Provider store={ store }>
      <Router>
        <>
          <section id="main_content" className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
}


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
