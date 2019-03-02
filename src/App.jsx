import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
