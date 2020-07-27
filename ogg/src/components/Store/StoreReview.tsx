import * as React from "react";

import * as S from "./../../lib/style/store";
import StoreReviewItem from "./StoreReviewItem";

const reviews = [
  {
    content:
      "걍 새벽이라 그런지 갑자기 막 차올라 재현이 진짜 너무 사랑해 ㅜ ㅜ ㅜ ㅜ ㅜ ㅜㅜ ㅜㅜ",
    score: 5,
    datetime: "2020-02-30 20:12:11"
  },
  {
    content:
      "재현아 너무너무 사랑해 곱슬곱슬한 머리도 얇은 입술도 재현이의 모든 부분을 다 사랑해❤️❤️❤️",
    score: 4,
    datetime: "2020-02-30 20:12:13"
  }
];

const StoreReview: React.FC = () => (
  <S.StoreReviewContainer>
    <S.StoreReviewHeader>
      <S.StoreReviewTitle>쇼핑몰 리뷰</S.StoreReviewTitle>
      <S.StoreReviewAddButton>+ 등록하기</S.StoreReviewAddButton>
    </S.StoreReviewHeader>
    {reviews.map(review => (
      <StoreReviewItem store_review={review} />
    ))}
  </S.StoreReviewContainer>
);

export default StoreReview;
