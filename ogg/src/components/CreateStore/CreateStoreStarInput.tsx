import * as React from "react";

import useUpdateStoreStar from "../../hooks/store/useUpdateStoreStar";
import { starIcon, grayStarIcon } from "../../assets";
import * as S from "../../lib/style/store";

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

const CreateStoreStarInput: React.FC = () => {
  const { starState, updateStar } = useUpdateStoreStar();

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStar(e.target.value);
  };

  return (
    <S.StoreReviewStarsContainer>
      {getStarsColor(starState).map((star, idx) => (
        <>
          <label htmlFor={`${idx + 1}`}>
            <S.StoreReviewStarsLabel src={star} />
          </label>
          <S.StoreReviewStarRadio
            type="radio"
            name="stars"
            id={`${idx + 1}`}
            value={idx + 1}
            onChange={e => onClick(e)}
          />
        </>
      ))}
    </S.StoreReviewStarsContainer>
  );
};

export default CreateStoreStarInput;
