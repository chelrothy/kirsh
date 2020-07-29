import * as React from "react";

import * as S from "./../../lib/style/store";
import useSendReview from "./../../hooks/review/useSendReview";

const StoreReviewSubmitButton: React.FC = () => {
  const submitReview = useSendReview();

  return (
    <S.StoreReviewSubmitButton onClick={() => submitReview()}>
      등록
    </S.StoreReviewSubmitButton>
  );
};

export default StoreReviewSubmitButton;
