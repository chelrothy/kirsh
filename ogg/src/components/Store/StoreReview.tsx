import * as React from "react";

import * as S from "./../../lib/style/store";
import StoreReviewItem from "./StoreReviewItem";
import StoreReviewInput from "./StoreReviewInput";
import useReviewToggle from "./../../hooks/review/useReviewToggle";

type StoreReviewProps = {
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

const StoreReview: React.FC<StoreReviewProps> = ({ store }) => {
  const { toggleState, changeToggle } = useReviewToggle();

  return (
    <S.StoreReviewContainer>
      <S.StoreReviewHeader>
        <S.StoreReviewTitle>쇼핑몰 리뷰</S.StoreReviewTitle>
        <S.StoreReviewButton onClick={() => changeToggle()}>
          + 등록하기
        </S.StoreReviewButton>
      </S.StoreReviewHeader>
      {toggleState && <StoreReviewInput />}
      {store.store_review.map(review => (
        <StoreReviewItem store_review={review} />
      ))}
    </S.StoreReviewContainer>
  );
};

export default StoreReview;
