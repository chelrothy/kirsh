import styled from "styled-components";

export const AuthBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AuthContainer = styled.section`
  width: 12.5em;
  height: 21.8125em;
  background-color: white;
  border-radius: 0.125em;
`;

export const AuthHeader = styled.header`
  margin-top: 0.625em;
  text-align: center;
`;

export const AuthLogoText = styled.h1`
  display: inline-block;
  font-family: "YanoljaYacheR";
  font-size: 0.875em;
  color: #ff5a4c;
`;

export const AuthLogoTextGray = styled(AuthLogoText)`
  color: #65686c;
  padding-left: 0.625em;
`;

export const AuthCloseIcon = styled.img`
  float: right;
  padding-right: 0.625em;
`;

export const AuthMainText = styled.p`
  margin-top: 2.125em;
  font-size: 0.8125em;
  text-align: center;
  line-height: 1.8em;
  color: #333333;
`;

export const AuthSubText = styled.p`
  font-size: 0.5em;
  text-align: center;
  margin-top: 1em;
  line-height: 1.75em;
`;

export const AuthFormContainer = styled.div`
  width: 11.25em;
  padding: 1.25em 0.625em;
`;

export const AuthForm = styled.div`
  width: 100%;
`;

export const AuthFormLabel = styled.label`
  font-size: 0.4375em;
`;

export const AuthFormInput = styled.input`
  all: unset;
  font-size: 0.5em;
  color: #333333;
  padding: 1em;
  width: calc(100% - 2em);
  border: 1px solid #E1E2E3;
  border-radius: 0.4em;

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const AuthFormButton = styled.button`
  margin-top: 1.5em;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  font-size: 0.5em;
  color: white;
  background-color: #FF5A4C;
  border-radius: 2em;  
`;