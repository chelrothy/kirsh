// Actions
const INIT_STORE = "store/INIT_STORE" as const;
const UPDATE_STORE = "store/UPDATE_STORE" as const;

// Actions Type
type StoreAction =
  | ReturnType<typeof initStore>
  | ReturnType<typeof updateStore>;

// State Type & Initial State
type StoreState = {
  id: number;
  ranking: number;
  name: string;
  description: string;
  average_score: number;
  average_price: number;
  picture: string;
  store_review: {
    content: string;
    score: number;
    datetime: string;
  }[];
  products: {
    product_id: number;
    name: string;
    picture: string;
    average_score: number;
    reviews: {
      content: string;
      score: number;
      datetime: string;
    }[];
  }[];
};

export const initialState: StoreState = {
  id: 2,
  ranking: 1,
  name: "재현이가 로딩 중",
  description: "조금만 기다려 주세요!",
  average_score: 3.3,
  average_price: 10000,
  picture:
    "https://file3.instiz.net/data/cached_img/upload/2019/02/22/20/45dbdc62c0d4436b0e0aa1c48bc9959d.jpg",
  store_review: [
    {
      content: "블라블라",
      score: 3.2,
      datetime: "2020-02-30 20:12:11"
    }
  ],
  products: [
    {
      product_id: 3,
      name: "예쁜옷",
      picture: "https://file3.instiz.net/data/cached_img/upload/2019/02/22/20/45dbdc62c0d4436b0e0aa1c48bc9959d.jpg",
      average_score: 3.2,
      reviews: [
        {
          content: "좀예쁨",
          score: 3,
          datetime: "2020-02-30 20:12:11"
        }
      ]
    }
  ]
};

// Reducer
const store = (state: StoreState = initialState, action: StoreAction) => {
  switch (action.type) {
    case INIT_STORE:
      return initialState;
    case UPDATE_STORE:
      return initialState;
    default:
      return state;
  }
};

export default store;

// Action Creators
export const initStore = () => ({
  type: INIT_STORE
});

export const updateStore = (payload: StoreState) => ({
  type: UPDATE_STORE,
  payload: payload
});
