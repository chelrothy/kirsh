import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./lib/style/GlobalStyle";
import Header from "./components/Header";
import useAuthDisplayStatus from "./hooks/auth/useAuthDisplayStatus";

import * as P from "./pages";

const App: React.FC = () => {
  const isOpen = useAuthDisplayStatus();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={P.Main} exact />
        <Route path="/:id" component={P.Store} exact />
        <Route path="/:id/:product" component={P.Product} exact />
      </Switch>
      {isOpen && <P.Auth />}
    </BrowserRouter>
  );
};

export default App;
