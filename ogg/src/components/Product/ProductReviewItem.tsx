import * as React from "react";

import * as S from "./../../lib/style/store";
import ProductReviewStars from "./ProductReviewStars";

type ProductReviewItemProps = {
  review: {
    content: string;
    score: number;
    datetime: string;
  };
};

const ProductReviewItem: React.FC<ProductReviewItemProps> = ({ review }) => (
  <S.StoreReviewItemContainer>
    <S.StoreReviewItemText>{review.content}</S.StoreReviewItemText>
    <ProductReviewStars score={review.score} />
  </S.StoreReviewItemContainer>
);

export default ProductReviewItem;
