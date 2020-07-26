import * as React from "react";

import * as S from "./../../lib/style/store";
import * as BS from "./../../lib/style";
import { mainBgImg } from "./../../assets";
import StoreInfo from "./StoreInfo";

const Store: React.FC = () => (
  <S.StoreContainer>
    <StoreInfo />
    <BS.BackgroundImg src={mainBgImg} />
  </S.StoreContainer>
);

export default Store;
