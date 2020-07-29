// Actions
const INIT_MODAL = "createStore/INIT_MODAL" as const;
const OPEN_MODAL = "createStore/OPEN_MODAL" as const;
const CLOSE_MODAL = "createStore/CLOSE_MODAL" as const;
const UPDATE_STORE_NAME = "createStore/UPDATE_STORE_NAME" as const;
const UPDATE_DESCRIPTION = "createStore/UPDATE_DESCRIPTION" as const;
const UPDATE_SCORE = "createScore/UPDATE_SCORE" as const;
const UPDATE_AVERAGE_PRICE = "createStore/UPDATE_AVERAGE_PRICE" as const;
const UPDATE_PICTURE = "createStore/UPDATE_PICTURE" as const;

// Actions Type
type CreateStoreAction =
  | ReturnType<typeof initModal>
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>
  | ReturnType<typeof updateStoreName>
  | ReturnType<typeof updateDescription>
  | ReturnType<typeof updateScore>
  | ReturnType<typeof updateAveragePrice>
  | ReturnType<typeof updatePicture>;

// State Type & Initial State
type CreateStoreState = {
  isOpen: boolean;
  store_name: string;
  description: string;
  score: number;
  average_price: string;
  picture: File;
};

const initialState: CreateStoreState = {
  isOpen: false,
  store_name: "",
  description: "",
  score: 1,
  average_price: "",
  picture: new File([], "picture")
};

// Reducer
const createStore = (
  state: CreateStoreState = initialState,
  action: CreateStoreAction
) => {
  switch (action.type) {
    case INIT_MODAL:
      return initialState;
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    case UPDATE_STORE_NAME:
      return { ...state, store_name: action.payload };
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    case UPDATE_SCORE:
      return { ...state, score: action.payload };
    case UPDATE_AVERAGE_PRICE:
      return { ...state, average_price: action.payload };
    case UPDATE_PICTURE:
      return { ...state, picture: action.payload };
    default:
      return state;
  }
};

export default createStore;

// Action Creators
export const initModal = () => ({
  type: INIT_MODAL
});

export const openModal = () => ({
  type: OPEN_MODAL
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const updateStoreName = (payload: string) => ({
  type: UPDATE_STORE_NAME,
  payload: payload
});

export const updateDescription = (payload: string) => ({
  type: UPDATE_DESCRIPTION,
  payload: payload
});

export const updateScore = (payload: number) => ({
  type: UPDATE_SCORE,
  payload: payload
});

export const updateAveragePrice = (payload: string) => ({
  type: UPDATE_AVERAGE_PRICE,
  payload: payload
});

export const updatePicture = (payload: File) => ({
  type: UPDATE_PICTURE,
  payload: payload
});
