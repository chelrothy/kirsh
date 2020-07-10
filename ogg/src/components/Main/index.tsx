import * as React from "react";

import * as BS from "./../../lib/style";
import * as S from "../../lib/style/main";
import { mainBgImg } from "./../../assets";
import Header from "./../Header";
import MainSearchBar from "./MainSearchBar";

const Main: React.FC = () => (
  <S.MainContainer>
    <Header />
    <MainSearchBar />
    <BS.BackgroundImg src={mainBgImg} />
  </S.MainContainer>
);

export default Main;
