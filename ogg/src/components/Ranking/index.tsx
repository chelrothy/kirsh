import * as React from "react";

import RankingItem from "./RankingItem";

type RankingType = {
  id: number;
  ranking: number;
  name: string;
  description: string;
  score: number;
  average_price: number;
  picture: string;
}[];

const ranking: RankingType = [
  {
    id: 3,
    ranking: 1,
    name: "혀니혀니",
    description: "더보이즈의 선물 현재",
    score: 5,
    average_price: 342434,
    picture:
      "https://file3.instiz.net/data/cached_img/upload/2019/02/22/20/45dbdc62c0d4436b0e0aa1c48bc9959d.jpg"
  },
  {
    id: 6,
    ranking: 2,
    name: "차니차니",
    description: "은주가 좋아하는 차니차니",
    score: 5,
    average_price: 8288288,
    picture: "https://pbs.twimg.com/media/DqxbKzyUwAAZH6L.jpg"
  },
  {
    id: 1,
    ranking: 3,
    name: "여니여니",
    description: "채은이가 좋아하는 남정네",
    score: 5,
    average_price: 234624,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA1oNY0VSW1PSOJXEsr7lXlpiDgOvhOLXqPA&usqp=CAU"
  },
  {
    id: 9,
    ranking: 4,
    name: "후니후니",
    description: "반박불가 외모 원탑",
    score: 4,
    average_price: 243545,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXPJ5FDo5946lnDqmMRrDByJnNCe5sAloUog&usqp=CAU"
  },
  {
    id: 11,
    ranking: 5,
    name: "미니미니",
    description: "창미니미니 귀여운 다람쥐 창미니미니",
    score: 4,
    average_price: 3465346,
    picture: "https://pbs.twimg.com/media/EZ5wJodVcAA0Vx3.jpg"
  },
  {
    id: 51,
    ranking: 6,
    name: "서누서누",
    description: "조꼬딩 우리 서누",
    score: 4,
    average_price: 2345455,
    picture:
      "https://pbs.twimg.com/profile_images/1272917012876951552/fjqWkFxC.jpg"
  }
];

const Ranking: React.FC = () => (
  <div>
    {ranking.map(item => (
      <RankingItem ranking={item} />
    ))}
  </div>
);

export default Ranking;
