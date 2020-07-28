// Actions
const UPDATE_RANKING = "ranking/UPDATE_RANKING" as const;
const UPDATE_SEARCH = "ranking/UPDATE_SEARCH" as const;

// Actions Type
type RankingAction =
  | ReturnType<typeof updateRanking>
  | ReturnType<typeof updateSearch>;

// State Type & Initial State
type RankingType = {
  id: number;
  ranking: number;
  name: string;
  description: string;
  average_score: number;
  average_price: number;
  picture: string;
}[];

type RankingState = {
  search: string;
  ranking: RankingType;
};

const initialState: RankingState = {
  search: "",
  ranking: [
    {
      id: 0,
      ranking: 0,
      name: "재현이가 로딩 중!",
      description: "잠시만 기다려 주세요~",
      average_score: 5,
      average_price: 10000,
      picture:
        "https://file3.instiz.net/data/cached_img/upload/2019/02/22/20/45dbdc62c0d4436b0e0aa1c48bc9959d.jpg"
    }
  ]
};

// Reducer
const review = (
  state: RankingState = initialState,
  action: RankingAction
): RankingState => {
  switch (action.type) {
    case UPDATE_RANKING:
      return { search: state.search, ranking: action.ranking };
    case UPDATE_SEARCH:
      return { ranking: state.ranking, search: action.search };
    default:
      return state;
  }
};

export default review;

// Action Creators
export const updateRanking = (payload: RankingType) => ({
  type: UPDATE_RANKING,
  ranking: payload
});

export const updateSearch = (payload: string) => ({
  type: UPDATE_SEARCH,
  search: payload
});
