import * as React from "react";

import * as S from "./../../lib/style/store";
import { starIcon } from "./../../assets";

const StoreInfo: React.FC = () => (
  <S.StoreInfoContainer>
    <S.StoreInfoScoreContainer>
      <S.StoreInfoScore>1</S.StoreInfoScore>
    </S.StoreInfoScoreContainer>
    <S.StoreInfoContentContainer>
      <S.StoreInfoContentName>언니가 간다</S.StoreInfoContentName>
      <S.StoreInfoContentDescription>
        10대 20대를 위한 옷가게
        <S.StoreInfoContentStarContainer>
          <S.StoreInfoContentStarIcon src={starIcon} />
          <S.StoreInfoContentStarNumber>
            <strong>4</strong>
          </S.StoreInfoContentStarNumber>
        </S.StoreInfoContentStarContainer>
        <S.StoreInfoContentPrice>평균 가격대 / 20000원</S.StoreInfoContentPrice>
      </S.StoreInfoContentDescription>
    </S.StoreInfoContentContainer>
  </S.StoreInfoContainer>
);

export default StoreInfo;
