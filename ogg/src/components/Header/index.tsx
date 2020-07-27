import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../../lib/style/header";
import HeaderAuthBtn from "./HeaderAuthBtn";
import HeaderLogo from "./HeaderLogo";

const Header: React.FC = () => (
  <S.HeaderContainer>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <HeaderLogo />
    </Link>
    <HeaderAuthBtn />
  </S.HeaderContainer>
);

export default Header;
