import * as React from "react";

import * as S from "./../../lib/style/store";
import StoreProductsReviewItem from "./StoreProductsReviewItem";

const products = [
  {
    name: "Unisex Skylight Over Shirts_Blue",
    picture:
      "https://pbs.twimg.com/media/EdspPTLUYAIEgT1?format=jpg&name=large",
    average_score: 2.5,
    reviews: [
      {
        content: "더운데 안 더운척 ㅠㅠ",
        score: 3,
        datetime: "2020-02-30 20:12:11"
      },
      {
        content: "예쁜가? 모르겠다...",
        score: 2,
        datetime: "2020-02-30 20:12:11"
      }
    ]
  },
  {
    name: "Striped Knitted Shirt - Dark Teal",
    picture:
      "https://pbs.twimg.com/media/EanwUEdUEAEP3xF?format=jpg&name=large",
    average_score: 4,
    reviews: [
      {
        content:
          "그거 알죠? 요즘 안과가면 우리 비주얼 3MC 사진 걸어두는 거? 우리 밍쇼&션쇼&쭈쇼 보면 시력 몽골인 되는 거 시간 문제거등요 👁👁 보고만 있어도 정화되는 갓벽 비주얼 더쇼가 다 뿌듯해!!!!!!!",
        score: 4,
        datetime: "2020-02-30 20:12:11"
      },
      {
        content: "When will juyeon stop being my bias wrecker? ",
        score: 4,
        datetime: "2020-02-30 20:12:11"
      },
      {
        content:
          "와 오늘 3MC들 의상 예쁘네요 비주얼도 기럭지도 완벽 밍쇼 오늘도 화이팅",
        score: 4,
        datetime: "2020-02-30 20:12:11"
      }
    ]
  }
];

const StoreProductsReview: React.FC = () => (
  <S.StoreReviewContainer>
    <S.StoreReviewHeader>
      <S.StoreReviewTitle>상품 리뷰</S.StoreReviewTitle>
      <S.StoreReviewButton>+ 상품 등록하기</S.StoreReviewButton>
    </S.StoreReviewHeader>
    {products.map(item => (
      <StoreProductsReviewItem products={item} />
    ))}
  </S.StoreReviewContainer>
);

export default StoreProductsReview;
