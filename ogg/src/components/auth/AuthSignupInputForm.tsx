import * as React from "react";

import * as S from "../../lib/style/auth";

type AuthInputFormProps = {
  value: string;
  onChange: (name: "id" | "password" | "name", value: string) => void;
  placeholder: string;
  type: "id" | "password" | "name";
};

const AuthInputSignupForm: React.FC<AuthInputFormProps> = ({
  value,
  onChange,
  placeholder,
  type
}) => {
  return (
    <>
      <S.AuthFormLabel>{type.toUpperCase()}</S.AuthFormLabel>
      <S.AuthFormInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(type, e.target.value)}
      />
    </>
  );
};

export default AuthInputSignupForm;
