import * as React from "react";

import * as BS from "./../../lib/style";
import * as S from "../../lib/style/main";
import { mainBgImg } from "./../../assets";
import Ranking from "./../Ranking";
import SearchBar from "./MainSearchBar";

const Main: React.FC = () => (
  <S.MainContainer>
    <SearchBar />
    <Ranking />
    <BS.BackgroundImg src={mainBgImg} />
  </S.MainContainer>
);

export default Main;
