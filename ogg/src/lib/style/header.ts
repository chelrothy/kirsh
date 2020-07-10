import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: calc(100% - 25em);
  justify-content: space-between;
  padding: 1.25em 12.5em;
  position: fixed;
  top: 0;
  background-color: rgba(256, 256, 256, 0.7);
`;

export const HeaderAuthBtn = styled.button`
  float: right;
  right: 0;
  color: #707070;
  font-size: 0.75em;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogoImg = styled.img`
  display: inline-block;
  margin-right: 0.25em;
  width: 1.25em;
  height: 1.25em;
`;

export const HeaderLogoText = styled.h1`
  display: inline-block;
  font-family: "YanoljaYacheR";
  font-size: 1.25em;
  color: #ff5a4c;
`;

export const HeaderLogoTextGray = styled(HeaderLogoText)`
  color: #65686C;
`;