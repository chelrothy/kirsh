import * as React from "react";

import * as S from "./../../lib/style/auth";

type AuthInputFormProps = {
  value: string;
  onChange: (name: "id" | "password", value: string) => void;
  placeholder: string;
  type: "id" | "password";
}

const AuthInputForm: React.FC<AuthInputFormProps> = ({
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
        onChange={e =>
          onChange(type === "password" ? "password" : "id", e.target.value)
        }
      />
    </>
  );
};

export default AuthInputForm;
