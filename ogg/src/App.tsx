import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./lib/style/GlobalStyle";

import * as P from "./pages";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={P.Main} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
