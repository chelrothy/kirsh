import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import * as S from "./../../lib/style/store";
import * as BS from "./../../lib/style";
import { detailBgImg } from "./../../assets";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import useProduct from "./../../hooks/product/useProduct";

type ProductProps = RouteComponentProps<MatchParams>;

type MatchParams = {
  id: string;
  product: string;
};

const Product: React.FC<ProductProps> = ({ match }) => {
  const productState = useProduct(parseInt(match.params.product));

  return (
    <S.StoreContainer>
      <ProductInfo product={productState} />
      <ProductReview reviews={productState.reviews} />
      <BS.BackgroundImg src={detailBgImg}></BS.BackgroundImg>
    </S.StoreContainer>
  );
};

export default withRouter(Product);
