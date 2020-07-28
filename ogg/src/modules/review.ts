// Actions
const INIT_REVIEW = "review/INIT_REVIEW" as const;
const OPEN_REVIEW = "review/OPEN_REVIEW" as const;
const CLOSE_REVIEW = "review/CLOSE_REVIEW" as const;
const UPDATE_CONTENT = "review/UPDATE_CONTENT" as const;
const UPDATE_SCORE = "review/UPDATE_SCORE" as const;

// Actions Type
type ReviewAction =
  | ReturnType<typeof initReview>
  | ReturnType<typeof openReview>
  | ReturnType<typeof closeReview>
  | ReturnType<typeof updateContent>
  | ReturnType<typeof updateScore>;

// State Type & Initial State
type ReviewState = {
  isOpen: boolean;
  review: {
    content: string;
    score: number;
  };
};

const initialState: ReviewState = {
  isOpen: false,
  review: {
    content: "",
    score: 1
  }
};

// Reducer
const review = (state: ReviewState = initialState, action: ReviewAction) => {
  switch (action.type) {
    case INIT_REVIEW:
      return initialState;
    case OPEN_REVIEW:
      return { ...state, isOpen: true };
    case CLOSE_REVIEW:
      return { ...state, isOpen: false };
    case UPDATE_CONTENT:
      return { ...state, review: { ...state.review, content: action.payload } };
    case UPDATE_SCORE:
      return { ...state, review: { ...state.review, score: action.payload } };
    default:
      return state;
  }
};

export default review;

// Action Creators
export const initReview = () => ({
  type: INIT_REVIEW
});

export const openReview = () => ({
  type: OPEN_REVIEW
});

export const closeReview = () => ({
  type: CLOSE_REVIEW
});

export const updateContent = (payload: string) => ({
  type: UPDATE_CONTENT,
  payload: payload
});

export const updateScore = (payload: number) => ({
  type: UPDATE_SCORE,
  payload: payload
});
