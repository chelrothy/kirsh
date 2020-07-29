import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import * as S from "./../../lib/style/store";
import * as BS from "./../../lib/style";
import { detailBgImg } from "./../../assets";
import StoreInfo from "./StoreInfo";
import StoreReview from "./StoreReview";
import StoreProductsReview from "./StoreProductsReview";
import useStore from "./../../hooks/store/useStore";
import CreateProduct from "./../CreateProduct";
import useCreateProductModal from "./../../hooks/product/useCreateProductModal";

type StoreProps = RouteComponentProps<MatchParams>;

type MatchParams = {
  id: string;
};

const Store: React.FC<StoreProps> = ({ match }) => {
  const storeState = useStore(parseInt(match.params.id));
  const {isOpen, setModalOpened, setModalClosed} = useCreateProductModal();

  return (
    <S.StoreContainer>
      <StoreInfo store={storeState} />
      <StoreReview store={storeState} />
      <StoreProductsReview store={storeState} />
      {isOpen && <CreateProduct />}
      <BS.BackgroundImg src={detailBgImg} />
    </S.StoreContainer>
  );
};

export default withRouter(Store);
