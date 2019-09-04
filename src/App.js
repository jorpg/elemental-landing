import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./modules/landing/Landing";

const routes = [{ component: Landing, path: "/" }];

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={i}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
