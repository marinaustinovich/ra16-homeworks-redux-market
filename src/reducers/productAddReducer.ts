import { CHANGE_FIELD, RESET_FIELDS } from "../actions";

export interface ProductFormState {
  id: string;
  title: string;
  price: string;
  discount: string;
  img: string;
}

interface ChangeFieldAction {
  type: typeof CHANGE_FIELD;
  payload: {
    name: keyof ProductFormState;
    value: string;
  };
}

interface ResetFieldsAction {
  type: typeof RESET_FIELDS;
}

type ProductActions = ChangeFieldAction | ResetFieldsAction;

const initialState: ProductFormState = {
  id: "",
  title: "",
  price: '0',
  discount: "",
  img: "",
};

export default function productAddReducer(
  state: ProductFormState = initialState,
  action: ProductActions
): ProductFormState {
  switch (action.type) {
    case CHANGE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_FIELDS:
      return { ...initialState };
    default:
      return state;
  }
}
