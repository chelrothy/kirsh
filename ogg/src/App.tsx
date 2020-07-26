import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./lib/style/GlobalStyle";

import * as P from "./pages";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={P.Main} exact />
      <Route path="/:id" component={P.Store} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
