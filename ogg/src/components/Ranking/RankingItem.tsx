import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../../lib/style/ranking";
import RankingItemInfo from "./RankingItemInfo";

type RankingItemProps = {
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

const RankingItem: React.FC<RankingItemProps> = ({ ranking }) => (
  <Link to={`/${ranking.id}`} style={{ textDecoration: "none" }}>
    <S.RankingItemContainer>
      <S.RankingItemContentContainer>
        <S.RankingItemNumberContainer>
          <S.RankingItemNumber>{ranking.ranking}</S.RankingItemNumber>
        </S.RankingItemNumberContainer>
        <RankingItemInfo ranking={ranking} />
      </S.RankingItemContentContainer>
      <S.RankingItemImg src={`${ranking.picture}`} />
    </S.RankingItemContainer>
  </Link>
);

export default RankingItem;
