import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../../lib/style/ranking";
import { starIcon } from "./../../assets";

type RankingItemInfoProps = {
  ranking: {
    id: number;
    ranking: number;
    name: string;
    description: string;
    score: number;
    average_price: number;
    picture: string;
  };
};

const RankingItemInfo: React.FC<RankingItemInfoProps> = ({ ranking }) => (
  <Link to={`/${ranking.id}`} style={{ textDecoration: 'none' }}>
    <S.RankingItemInfoContainer>
      <S.RankingItemDescription>{ranking.description}</S.RankingItemDescription>
      <S.RankingItemName>{ranking.name}</S.RankingItemName>
      <S.RankingItemStarContainer>
        <S.RankingItemStarIcon src={starIcon} />
        <S.RankingItemStarNumber>
          <strong>{ranking.score}</strong>
        </S.RankingItemStarNumber>
        <S.RankingItemPrice>
          평균 가격대 / {ranking.average_price}원
        </S.RankingItemPrice>
      </S.RankingItemStarContainer>
    </S.RankingItemInfoContainer>
  </Link>
);

export default RankingItemInfo;
