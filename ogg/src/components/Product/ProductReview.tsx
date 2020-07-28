import * as React from "react";

import * as S from "./../../lib/style/store";
import ProductReviewItem from "./ProductReviewItem";
import ProductReviewInput from "./ProductReviewInput";
import useReviewToggle from "./../../hooks/review/useReviewToggle";

type StoreReviewProps = {
  reviews: {
    content: string;
    score: number;
    datetime: string;
  }[];
};

const ProductReview: React.FC<StoreReviewProps> = ({ reviews }) => {
  const { toggleState, changeToggle } = useReviewToggle();

  return (
    <S.StoreReviewContainer>
      <S.StoreReviewHeader>
        <S.StoreReviewTitle>상품 리뷰</S.StoreReviewTitle>
        <S.StoreReviewButton onClick={() => changeToggle()}>
          + 등록하기
        </S.StoreReviewButton>
      </S.StoreReviewHeader>
      {toggleState && <ProductReviewInput />}
      {reviews.map(review => (
        <ProductReviewItem review={review} />
      ))}
    </S.StoreReviewContainer>
  );
};

export default ProductReview;
