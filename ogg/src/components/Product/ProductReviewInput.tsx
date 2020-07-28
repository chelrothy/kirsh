import * as React from "react";

import ProductReviewStarInput from "./ProductReviewStarInput";
import ProductReviewSubmitButton from "./ProductReviewSubmitButton";
import * as S from "./../../lib/style/store";
import useUpdateReview from "./../../hooks/review/useUpdateReview";

const ProductReviewInput: React.FC = () => {
  const { reviewState, updateReview } = useUpdateReview();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateReview(e.target.value);
  };

  return (
    <S.StoreReviewInputContainer>
      <S.StoreReviewInputBox
        value={reviewState}
        onChange={e => onChange(e)}
        placeholder="상품에 대한 리뷰를 작성해 주세요. 익명으로 게시되지만, 심한 비방과 유언비어는 제재될 수 있습니다."
      />
      <S.StoreReviewInputButtons>
        <ProductReviewStarInput />
        <ProductReviewSubmitButton />
      </S.StoreReviewInputButtons>
    </S.StoreReviewInputContainer>
  );
};

export default ProductReviewInput;
