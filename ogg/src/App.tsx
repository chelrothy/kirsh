import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./lib/style/GlobalStyle";
import Header from "./components/Header";

import * as P from "./pages";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" component={P.Main} exact />
      <Route path="/:id" component={P.Store} exact />
      <Route path="/:id/:product" component={P.Product} exact />
    </Switch>
    {/* <P.Auth /> */}
  </BrowserRouter>
);

export default App;
