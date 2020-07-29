// Actions
const INITIALIZE_INPUT = "auth/INITIALIZE_INPUT" as const;
const CHANGE_INPUT = "auth/CHANGE_INPUT" as const;
const OPEN_AUTH = "auth/OPEN_AUTH" as const;
const CLOSE_AUTH = "auth/CLOSE_AUTH" as const;

// Actions Type
type AuthAction =
  | ReturnType<typeof initializeInput>
  | ReturnType<typeof changeInput>
  | ReturnType<typeof openAuth>
  | ReturnType<typeof closeAuth>;

// State Type & Initial State
type AuthFormState = {
  isOpen: boolean;
  form: {
    id: string;
    password: string;
  };
};

const initialState: AuthFormState = {
  isOpen: false,
  form: { id: "", password: "" }
};

const auth = (state: AuthFormState = initialState, action: AuthAction) => {
  switch (action.type) {
    case INITIALIZE_INPUT:
      return { ...state, form: { id: "", password: "" } };
    case CHANGE_INPUT:
      const newForm = { ...state.form };
      newForm[action.payload.name] = action.payload.value;

      return { ...state, form: newForm };
    case OPEN_AUTH:
      return { ...state, isOpen: true };
    case CLOSE_AUTH:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default auth;

// Action Creators
export const initializeInput = () => ({
  type: INITIALIZE_INPUT
});

export const changeInput = ({
  name,
  value
}: {
  name: "id" | "password";
  value: string;
}) => ({
  type: CHANGE_INPUT,
  payload: {
    name,
    value
  }
});

export const openAuth = () => ({
  type: OPEN_AUTH
});

export const closeAuth = () => ({
  type: CLOSE_AUTH
});
