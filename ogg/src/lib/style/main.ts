
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const MainSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 1.125em;
  width: 21.25em;
  border-radius: 2em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.16);
  background-color: white;
  margin: 5.5em 0 2.5em 0;
`;

export const MainSearchBarIcon = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.75em;
`;

export const MainSearchBarInput = styled.input`
  all: unset;
  display: inline-block;
  font-size: 0.625em;
  flex: 1;
`;
