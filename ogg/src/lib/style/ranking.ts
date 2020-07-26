import styled from "styled-components";

export const RankingItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125em;
  width: 21.25em;
  height: 5em;
  border-radius: 0.2em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.16);
  background-color: white;
  margin-bottom: 2em;
`;

export const RankingItemContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RankingItemNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.625em;
  height: 1.625em;
  border-radius: 100%;
  background-color: #ff9da5;
  margin-right: 1em;
`;

export const RankingItemNumber = styled.p`
  color: white;
  font-size: 0.375em;
`;

export const RankingItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RankingItemDescription = styled.p`
  color: #8a8d92;
  font-size: 0.375em;
  margin-bottom: 0.5em;
`;

export const RankingItemName = styled.h2`
  font-size: 0.75em;
  color: #222222;
  margin-bottom: 0.75em;
`;

export const RankingItemStarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RankingItemStarIcon = styled.img`
  display: inline-block;
  margin-right: 0.125em;
  width: 0.5em;
  height: 0.5em;
`;

export const RankingItemStarNumber = styled.p`
  display: inline-block;
  font-size: 0.4375em;
  color: #ff9da5;
`;

export const RankingItemPrice = styled.p`
  margin-left: 2em;
  font-size: 0.4em;
  color: #8a8d92;
`;

export const RankingItemImg = styled.img`
  height: 4em;
  width: 5em;
  object-fit: cover;
  border-radius: 0.25em;
`;
