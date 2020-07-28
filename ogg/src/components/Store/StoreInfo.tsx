import * as React from "react";

import * as S from "./../../lib/style/store";
import { starIcon } from "./../../assets";

type StoreInfoProps = {
  store: {
    id: number;
    ranking: number;
    name: string;
    description: string;
    average_score: number;
    average_price: number;
    picture: string;
    store_review: {
      content: string;
      score: number;
      datetime: string;
    }[];
    products: {
      product_id: number;
      name: string;
      picture: string;
      average_score: number;
      reviews: {
        content: string;
        score: number;
        datetime: string;
      }[];
    }[];
  };
};

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => (
  <S.StoreInfoContainer>
    <S.StoreInfoScoreContainer>
      <S.StoreInfoScore>{store.ranking}</S.StoreInfoScore>
    </S.StoreInfoScoreContainer>
    <S.StoreInfoContentContainer>
      <S.StoreInfoContentName>{store.name}</S.StoreInfoContentName>
      <S.StoreInfoContentDescription>
        {store.description}
        <S.StoreInfoContentStarContainer>
          <S.StoreInfoContentStarIcon src={starIcon} />
          <S.StoreInfoContentStarNumber>
            <strong>{store.average_score}</strong>
          </S.StoreInfoContentStarNumber>
        </S.StoreInfoContentStarContainer>
        <S.StoreInfoContentPrice>
          평균 가격대 / {store.average_price}원
        </S.StoreInfoContentPrice>
      </S.StoreInfoContentDescription>
    </S.StoreInfoContentContainer>
  </S.StoreInfoContainer>
);

export default StoreInfo;
