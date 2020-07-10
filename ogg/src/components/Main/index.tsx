import * as React from "react";

import * as BS from "./../../lib/style";
import { mainBgImg } from "./../../assets";
import Header from "./../Header";

const Main = () => (
  <div>
    <Header />
    <BS.BackgroundImg src={mainBgImg} />
  </div>
);

export default Main;
