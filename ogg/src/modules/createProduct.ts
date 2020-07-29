// Actions
const OPEN_MODAL = "createProduct/OPEN_MODAL" as const;
const CLOSE_MODAL = "createProduct/CLOSE_MODAL" as const;
const UPDATE_PRODUCT_NAME = "createProduct/UPDATE_PRODUCT_NAME" as const;
const UPDATE_PICTURE = "createProduct/UPDATE_PICTURE" as const;

// Actions Type
type createProductAction =
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>
  | ReturnType<typeof updateProductName>
  | ReturnType<typeof updatePicture>;

// State Type & Initial State
type createProductState = {
  isOpen: boolean;
  product_name: string;
  picture: File;
};

const initialState: createProductState = {
  isOpen: false,
  product_name: "",
  picture: new File([], "picture")
};

const createProduct = (
  state: createProductState = initialState,
  action: createProductAction
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    case UPDATE_PRODUCT_NAME:
      return { ...state, product_name: action.payload };
    case UPDATE_PICTURE:
      return { ...state, picture: action.payload };
    default:
      return state;
  }
};

export default createProduct;

// Action Creators
export const openModal = () => ({
  type: OPEN_MODAL
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const updateProductName = (payload: string) => ({
  type: UPDATE_PRODUCT_NAME,
  payload: payload
});

export const updatePicture = (payload: File) => ({
  type: UPDATE_PICTURE,
  payload: payload
});
