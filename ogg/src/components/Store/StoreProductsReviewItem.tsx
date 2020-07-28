import * as React from "react";
import { Link, match, withRouter, RouteComponentProps } from "react-router-dom";

import * as S from "./../../lib/style/store";
import { starIcon } from "./../../assets";

type StoreProductsReviewItemProps = {
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
  };
} & RouteComponentProps<MatchParams>;

type MatchParams = {
  id: string;
};

const StoreProductsReviewItem: React.FC<StoreProductsReviewItemProps> = ({
  products,
  match
}) => (
  <S.StoreProductContainer>
    <S.StoreProductContent>
      <S.StoreProductImg src={products.picture} />
      <div>
        <S.StoreProductHeader>
          <S.StoreProductName>{products.name}</S.StoreProductName>
          <S.StoreProductStarContainer>
            <S.StoreProductStarIcon src={starIcon} />
            <S.StoreProductStarNumber>
              {products.average_score}
            </S.StoreProductStarNumber>
          </S.StoreProductStarContainer>
        </S.StoreProductHeader>
        {products.reviews[0] && (
          <S.StoreProductReview>
            {products.reviews[0].content}
          </S.StoreProductReview>
        )}
        {products.reviews[1] && (
          <S.StoreProductReview>
            {products.reviews[1].content}
          </S.StoreProductReview>
        )}
      </div>
    </S.StoreProductContent>
    <Link
      to={`/${match.params.id}/${products.product_id}`}
      style={{ textDecoration: "none" }}
    >
      <S.StoreReviewButton>더보기</S.StoreReviewButton>
    </Link>
  </S.StoreProductContainer>
);

export default withRouter(StoreProductsReviewItem);
