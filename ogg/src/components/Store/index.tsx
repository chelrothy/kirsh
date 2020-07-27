import * as React from "react";

import * as S from "./../../lib/style/store";
import * as BS from "./../../lib/style";
import { detailBgImg } from "./../../assets";
import StoreInfo from "./StoreInfo";
import StoreReview from "./StoreReview";

const Store: React.FC = () => (
  <S.StoreContainer>
    <StoreInfo />
    <StoreReview />
    <BS.BackgroundImg src={detailBgImg} />
  </S.StoreContainer>
);

export default Store;
