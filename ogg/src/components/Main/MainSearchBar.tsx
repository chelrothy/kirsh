import * as React from "react";

import * as S from "../../lib/style/main";
import { searchIcon } from "./../../assets";

const MainSearchBar: React.FC = () => (
  <S.MainSearchBarContainer>
    <S.MainSearchBarIcon src={searchIcon} />
    <S.MainSearchBarInput type="text" placeholder="다양한 옷가게를 검색하세요" />
  </S.MainSearchBarContainer>
);

export default MainSearchBar;
