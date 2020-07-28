import * as React from "react";

import * as S from "./../../lib/style/store";
import { starIcon, grayStarIcon } from "./../../assets";

type StoreReviewStarsProps = {
  score: number;
};

const getStarsColor = (score: number) => {
  let colors: string[] = [];

  for (let i = 1; i <= 5; i++) {
    if (score < i) {
      colors.push(grayStarIcon);
      continue;
    }
    colors.push(starIcon);
  }

  return colors;
};

const StoreReviewStars: React.FC<StoreReviewStarsProps> = ({ score }) => (
  <S.StoreReviewStarsContainer>
    {getStarsColor(score).map(star => (
      <S.StoreReviewStarsIcon src={star} />
    ))}
  </S.StoreReviewStarsContainer>
);

export default StoreReviewStars;
