import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./modules/landing/Landing";
import FormOne from "./modules/form-1/FormOne";
import FormTwo from "./modules/form-1/Formtwo";
import FormThree from "./modules/form-1/Formthree";
import FormFour from "./modules/form-1/FormFour";
import FormFive from "./modules/form-1/FormFive";
import FormSix from "./modules/form-1/FormSix";

const routes = [
  { component: Landing, path: "/" },
  { component: FormOne, path: "/que-deseas" },
  { component: FormTwo, path: "/genero" },
  { component: FormThree, path: "/edad" },
  { component: FormFour, path: "/estatura" },
  { component: FormFive, path: "/payment" },
  { component: FormSix, path: "/finish" }
];

class App extends Component {
  Landing;
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
