import * as React from "react";

import * as S from "./../../lib/style/store";
import { starIcon } from "./../../assets";

type ProductInfoProps = {
  product: {
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
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => (
  <S.StoreInfoContainer>
    <S.StoreProductCover src={product.picture} />
    <S.StoreInfoContentContainer>
      <S.StoreProductContentName>{product.name}</S.StoreProductContentName>
      <S.StoreInfoContentDescription>
        <S.StoreInfoContentStarContainer>
          <S.StoreInfoContentStarIcon src={starIcon} />
          <S.StoreInfoContentStarNumber>
            <strong>{product.average_score}</strong>
          </S.StoreInfoContentStarNumber>
        </S.StoreInfoContentStarContainer>
      </S.StoreInfoContentDescription>
    </S.StoreInfoContentContainer>
  </S.StoreInfoContainer>
);

export default ProductInfo;
