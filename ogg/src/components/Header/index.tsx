import * as React from "react";

import * as S from "./../../lib/style/header";
import HeaderAuthBtn from "./HeaderAuthBtn";
import HeaderLogo from "./HeaderLogo";

const Header = () => (
  <S.HeaderContainer>
    <HeaderLogo />
    <HeaderAuthBtn />
  </S.HeaderContainer>
);

export default Header;
