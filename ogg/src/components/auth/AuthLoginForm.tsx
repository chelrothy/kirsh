import * as React from "react";

import * as S from "./../../lib/style/auth";
import AuthInputForm from "./AuthInputForm";
import useLogin from "./../../hooks/auth/useLogin";

const AuthLoginForm: React.FC = () => {
  const { authInfo, onChange, postAuthInfo } = useLogin();

  return (
    <S.AuthFormContainer>
      <S.AuthForm>
        <form>
          <AuthInputForm
            value={authInfo.id}
            onChange={onChange}
            placeholder="아이디를 입력하세요"
            type="id"
          />
          <AuthInputForm
            value={authInfo.password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </form>
        <S.AuthFormButton
          onClick={() => {
            postAuthInfo();
          }}
        >
          로그인하기
        </S.AuthFormButton>
      </S.AuthForm>
    </S.AuthFormContainer>
  );
};

export default AuthLoginForm;
