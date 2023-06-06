import { 
    ADD_PRODUCT,
    CHANGE_FIELD,
    RESET_FIELDS,
    REMOVE_PRODUCT
} from './actionTypes';

export function changeField(name, value) {
    return { type: CHANGE_FIELD, payload: { name, value } };
}

export function addProduct(product) {
    return { type: ADD_PRODUCT, payload: product };
}

export function resetFields() {
    return { type: RESET_FIELDS };
}

export function removeProduct(id) {
    return {type: REMOVE_PRODUCT, payload: {id}};
}

