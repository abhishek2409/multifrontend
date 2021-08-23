import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const genClassName = createGenerateClassName({
  productionPrefix: "auth_",
});

const App = ({ history, onSignIn }) => {
  return (
    <Router history={history}>
      <div>
        <StylesProvider generateClassName={genClassName}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </StylesProvider>
      </div>
    </Router>
  );
};

export default App;
