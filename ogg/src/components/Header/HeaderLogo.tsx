import * as React from "react";

import * as S from "./../../lib/style/header";
import { logoImg } from "./../../assets";

const HeaderLogo: React.FC = () => (
  <S.HeaderLogoContainer>
    <S.HeaderLogoImg src={logoImg} />
    <S.HeaderLogoTextGray>옷</S.HeaderLogoTextGray>
    <S.HeaderLogoText>까게</S.HeaderLogoText>
  </S.HeaderLogoContainer>
);

export default HeaderLogo;
