import { createStore, combineReducers, compose } from "redux";
import productAddReducer from "../reducers/productAddReducer";
import productListReducer from "../reducers/productListReducer";

const reducer = combineReducers({
    productAdd: productAddReducer,
    productList: productListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;