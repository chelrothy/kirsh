import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import * as S from "./../../lib/style/store";
import useSendProductReview from "./../../hooks/product/useSendProductReview";

type ProductReviewSubmitButtonProps = RouteComponentProps<MatchParams>;

type MatchParams = {
  id: string;
  product: string;
};

const ProductReviewSubmitButton: React.FC<ProductReviewSubmitButtonProps> = ({
  match,
  history
}) => {
  const submitReview = useSendProductReview(parseInt(match.params.product));

  return (
    <S.StoreReviewSubmitButton
      onClick={() => {
        submitReview();
        history.push(`/${match.params.id}`);
      }}
    >
      등록
    </S.StoreReviewSubmitButton>
  );
};

export default withRouter(ProductReviewSubmitButton);
