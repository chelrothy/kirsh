import styled from "styled-components";

export const StoreContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const StoreInfoContainer = styled.div`
  margin-top: 4.825em;
  display: flex;
  align-items: center;
  width: calc(100% - 25em);
`;

export const StoreInfoScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125em;
  height: 3.215em;
  border-radius: 100%;
  background-color: #ff9da5;
  margin-right: 1em;
`;

export const StoreInfoScore = styled.p`
  color: white;
  font-size: 1em;
`;

export const StoreInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreInfoContentName = styled.h2`
  color: #222222;
  font-size: 1.125em;
  margin-bottom: 0.25em;
`;

export const StoreInfoContentDescription = styled.div`
  display: flex;
  align-items: center;
  color: #8a8d92;
  font-size: 0.75em;
`;

export const StoreInfoContentStarContainer = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const StoreInfoContentStarIcon = styled.img`
  display: inline-block;
  margin-right: 0.2em;
  width: 0.8em;
  height: 0.8em;
`;

export const StoreInfoContentStarNumber = styled.p`
  display: inline-block;
  font-size: 0.8em;
  color: #ff9da5;
`;

export const StoreInfoContentPrice = styled.p`
  margin-left: 1em;
  font-size: 0.7em;
  color: #8a8d92;
`;
