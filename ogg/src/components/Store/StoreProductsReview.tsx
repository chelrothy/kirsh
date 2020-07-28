import * as React from "react";

import * as S from "./../../lib/style/store";
import StoreProductsReviewItem from "./StoreProductsReviewItem";

type StoreProductsReviewProps = {
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

const StoreProductsReview: React.FC<StoreProductsReviewProps> = ({ store }) => (
  <S.StoreReviewContainer>
    <S.StoreReviewHeader>
      <S.StoreReviewTitle>상품 리뷰</S.StoreReviewTitle>
      <S.StoreReviewButton>+ 상품 등록하기</S.StoreReviewButton>
    </S.StoreReviewHeader>
    {store.products.map(item => (
      <StoreProductsReviewItem products={item} />
    ))}
  </S.StoreReviewContainer>
);

export default StoreProductsReview;
