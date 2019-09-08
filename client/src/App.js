import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import NavBar from './components/common/NavBar';
import Register from './components/auth/Register';
import Landing from './components/common/Landing';
import Authenticate from './components/auth/Authenticate';
import Alert from './components/common/Alert';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <br />
          <section className="container">
            <Alert />
            <Route exact path="/" component={Landing} />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Authenticate} />
            </Switch>
          </section>
          </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
