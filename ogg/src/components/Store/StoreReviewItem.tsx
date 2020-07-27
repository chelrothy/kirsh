import * as React from "react";

import * as S from "./../../lib/style/store";
import StoreReviewStars from "./StoreReviewStars";

type StoreReivewItemProps = {
  store_review: {
    content: string;
    score: number;
    datetime: string;
  };
};

const StoreReviewItem: React.FC<StoreReivewItemProps> = ({ store_review }) => (
  <S.StoreReviewItemContainer>
    <S.StoreReviewItemText>{store_review.content}</S.StoreReviewItemText>
    <StoreReviewStars score={store_review.score} />
  </S.StoreReviewItemContainer>
);

export default StoreReviewItem;
