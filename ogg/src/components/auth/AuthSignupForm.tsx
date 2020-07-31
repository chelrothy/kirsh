import * as React from "react";

import * as S from "../../lib/style/auth";
import AuthInputSignupForm from "./AuthSignupInputForm";
import useSignup from "../../hooks/auth/useSignup";
import useAuthState from "./../../hooks/auth/useAuthState";

const AuthLoginForm: React.FC = () => {
  const { signupInfo, onChange, postSignupInfo } = useSignup();
  const { status, changeStatus } = useAuthState();

  return (
    <S.AuthFormContainer>
      <S.AuthForm>
        <form>
          <AuthInputSignupForm
            value={signupInfo.name}
            onChange={onChange}
            placeholder="이름을 입력하세요"
            type="name"
          />
          <AuthInputSignupForm
            value={signupInfo.id}
            onChange={onChange}
            placeholder="아이디를 입력하세요"
            type="id"
          />
          <AuthInputSignupForm
            value={signupInfo.password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </form>
        <S.AuthFormButton
          onClick={() => {
            postSignupInfo();
          }}
        >
          가입하기
        </S.AuthFormButton>
        <p>or</p>
        <S.AuthFormSigninButton
          onClick={() => changeStatus()}
        >
          아이디가 이미 있습니다
        </S.AuthFormSigninButton>
      </S.AuthForm>
    </S.AuthFormContainer>
  );
};

export default AuthLoginForm;
