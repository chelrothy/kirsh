import * as React from "react";

import * as S from "./../../lib/style/ranking";
import { starIcon } from "./../../assets";

type RankingItemInfoProps = {
  ranking: {
    id: number;
    ranking: number;
    name: string;
    description: string;
    average_score: number;
    average_price: number;
    picture: string;
  };
};

const RankingItemInfo: React.FC<RankingItemInfoProps> = ({ ranking }) => (
  <S.RankingItemInfoContainer>
    <S.RankingItemDescription>{ranking.description}</S.RankingItemDescription>
    <S.RankingItemName>{ranking.name}</S.RankingItemName>
    <S.RankingItemStarContainer>
      <S.RankingItemStarIcon src={starIcon} />
      <S.RankingItemStarNumber>
        <strong>{ranking.average_score}</strong>
      </S.RankingItemStarNumber>
      <S.RankingItemPrice>
        평균 가격대 / {ranking.average_price}원
      </S.RankingItemPrice>
    </S.RankingItemStarContainer>
  </S.RankingItemInfoContainer>
);

export default RankingItemInfo;
