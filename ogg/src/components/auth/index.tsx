import * as React from "react";

import * as S from "./../../lib/style/auth";
import { closeIcon } from "./../../assets";
import AuthLoginForm from "./AuthLoginForm";
import useAuthClose from "./../../hooks/auth/useAuthClose";

const Auth: React.FC = () => {
  const closeAuth = useAuthClose();

  return (
    <S.AuthBackground>
      <S.AuthContainer>
        <S.AuthHeader>
          <span>
            <S.AuthLogoTextGray>옷</S.AuthLogoTextGray>
            <S.AuthLogoText>까게</S.AuthLogoText>
          </span>
          <S.AuthCloseIcon
            onClick={() => closeAuth()}
            src={closeIcon}
            alt="닫기"
          />
        </S.AuthHeader>
        <S.AuthMainText>
          당신에게 딱맞는
          <br />
          옷가게를 찾아보세요!
        </S.AuthMainText>
        <S.AuthSubText>
          옷까게에서 투명한 쇼핑몰 랭킹을 확인하고
          <br />
          리뷰를 통해 당신의 생각을 남겨 주세요.
        </S.AuthSubText>
        <AuthLoginForm />
      </S.AuthContainer>
    </S.AuthBackground>
  );
};

export default Auth;
