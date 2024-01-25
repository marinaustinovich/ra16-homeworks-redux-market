import { ProductFormState } from '../reducers/productAddReducer';
import { 
    ADD_PRODUCT,
    CHANGE_FIELD,
    RESET_FIELDS,
    REMOVE_PRODUCT
} from './actionTypes';

export function changeField(name: string, value: string) {
    return { type: CHANGE_FIELD, payload: { name, value } };
}

export function addProduct(product: ProductFormState) {
    return { type: ADD_PRODUCT, payload: product };
}

export function resetFields() {
    return { type: RESET_FIELDS };
}

export function removeProduct(id: string) {
    return {type: REMOVE_PRODUCT, payload: {id}};
}

