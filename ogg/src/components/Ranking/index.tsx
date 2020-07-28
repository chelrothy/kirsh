import * as React from "react";

import useRanking from "./../../hooks/ranking/useRanking";

import RankingItem from "./RankingItem";

type RankingType = {
  id: number;
  ranking: number;
  name: string;
  description: string;
  average_score: number;
  average_price: number;
  picture: string;
}[];

const Ranking: React.FC = () => {
  const ranking: RankingType = useRanking();

  return (
    <div>
      {ranking.map(item => (
        <RankingItem ranking={item} />
      ))}
    </div>
  );
};

export default Ranking;
