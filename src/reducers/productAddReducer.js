import { CHANGE_FIELD, RESET_FIELDS } from '../actions/actionTypes';
const initialState = {
    id: '',
    title: '',
    price: '',
    discount: '',
    img: '',
};

export default function productAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_FIELDS:
            return {...initialState};
        default:
            return state;
    }
}