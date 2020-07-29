import styled from "styled-components";

export const CreateProductBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CreateProductContainer = styled.section`
  width: 12.5em;
  height: 21.8125em;
  background-color: white;
  border-radius: 0.125em;
`;

export const CreateProductHeader = styled.header`
  margin-top: 0.625em;
  text-align: center;
`;

export const CreateProductLogoText = styled.h1`
  display: inline-block;
  font-family: "YanoljaYacheR";
  font-size: 0.875em;
  color: #ff5a4c;
`;

export const CreateProductLogoTextGray = styled(CreateProductLogoText)`
  color: #65686c;
  padding-left: 0.625em;
`;

export const CreateProductCloseIcon = styled.img`
  float: right;
  padding-right: 0.625em;
`;

export const CreateProductMainText = styled.p`
  margin-top: 2.125em;
  font-size: 0.8125em;
  text-align: center;
  line-height: 1.8em;
  color: #333333;
`;

export const CreateProductSubText = styled.p`
  font-size: 0.5em;
  text-align: center;
  margin-top: 1em;
  line-height: 1.75em;
`;

export const CreateProductFormContainer = styled.div`
  width: 11.25em;
  padding: 1.25em 0.625em;
`;

export const CreateProduct = styled.div`
  width: 100%;
`;

export const CreateProductLabel = styled.label`
  font-size: 0.4375em;
`;

export const CreateProductInput = styled.input`
  all: unset;
  font-size: 0.5em;
  color: #333333;
  padding: 1em;
  width: calc(100% - 2em);
  border: 1px solid #e1e2e3;
  border-radius: 0.4em;

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const CreateProductButton = styled.button`
  margin-top: 1.5em;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  font-size: 0.5em;
  color: white;
  background-color: #ff5a4c;
  border-radius: 2em;
`;
