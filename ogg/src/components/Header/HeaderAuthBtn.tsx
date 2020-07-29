import * as React from "react";

import * as S from "./../../lib/style/header";
import useAuthOpen from "./../../hooks/auth/useAuthOpen";
import { getToken, removeToken } from "./../../lib/token";

const HeaderAuthBtn: React.FC = () => {
  const onClickLogin = useAuthOpen();
  return (
    <>
      {getToken() ? (
        <S.HeaderAuthBtn
          onClick={() => {
            removeToken();
            window.location.reload();
          }}
        >
          로그아웃
        </S.HeaderAuthBtn>
      ) : (
        <S.HeaderAuthBtn onClick={() => onClickLogin()}>로그인</S.HeaderAuthBtn>
      )}
    </>
  );
};

export default HeaderAuthBtn;
