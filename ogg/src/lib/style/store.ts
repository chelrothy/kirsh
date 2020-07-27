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
  margin-bottom: 2.5em;
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

export const StoreReviewContainer = styled.div`
  width: calc(100% - 25em);  
`;

export const StoreReviewHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StoreReviewTitle = styled.h3`
  color: #222222;
  font-size: 0.875em;
`;

export const StoreReviewAddButton = styled.button`
  font-size: 0.625em;
  color: #8A8D92;
  align-items: flex-end;
`;

export const StoreReviewItemContainer = styled.div`
  margin-top: 1em;
  border-bottom: 1px solid #E6E6E6;
  padding-bottom: 0.7em;
`;

export const StoreReviewItemText = styled.p`
  font-size: 0.625em;
  margin-bottom: 0.375em;
`;

export const StoreReivewStarsContainer = styled.div`
  display: inline-block;
`;

export const StoreReviewStarsIcon = styled.img`
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.1875em;
`;