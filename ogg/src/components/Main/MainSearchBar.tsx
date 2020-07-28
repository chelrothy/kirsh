import * as React from "react";

import * as S from "../../lib/style/main";
import { searchIcon } from "./../../assets";
import useRankingSearch from "./../../hooks/ranking/useRankingSearch";

const MainSearchBar: React.FC = () => {
  const { searchState, changeSearch } = useRankingSearch();

  return (
    <S.MainSearchBarContainer>
      <S.MainSearchBarIcon src={searchIcon} />
      <S.MainSearchBarInput
        type="text"
        placeholder="다양한 옷가게를 검색하세요"
        value={searchState}
        onChange={e => changeSearch(e.target.value)}
      />
    </S.MainSearchBarContainer>
  );
};

export default MainSearchBar;
