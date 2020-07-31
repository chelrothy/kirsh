// Actions
const INITIALIZE_INPUT = "signup/INITIALIZE_INPUT" as const;
const CHANGE_INPUT = "signup/CHANGE_INPUT" as const;

// Actions Type
type SignupAction =
  | ReturnType<typeof initializeInput>
  | ReturnType<typeof changeInput>;

// State Type & Initial State
type SignupFormState = {
  form: {
    id: string;
    password: string;
    name: string;
  };
};

const initialState: SignupFormState = {
  form: { id: "", password: "", name: "" }
};

const signup = (
  state: SignupFormState = initialState,
  action: SignupAction
) => {
  switch (action.type) {
    case INITIALIZE_INPUT:
      return { ...state, form: { id: "", password: "", name: "" } };
    case CHANGE_INPUT:
      const newForm = { ...state.form };
      newForm[action.payload.name] = action.payload.value;

      return { ...state, form: newForm };
    default:
      return state;
  }
};

export default signup;

// Action Creators
export const initializeInput = () => ({
  type: INITIALIZE_INPUT
});

export const changeInput = ({
  name,
  value
}: {
  name: "id" | "password" | "name";
  value: string;
}) => ({
  type: CHANGE_INPUT,
  payload: {
    name,
    value
  }
});
