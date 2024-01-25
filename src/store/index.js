import { configureStore } from "@reduxjs/toolkit";
import productAddReducer from "../reducers/productAddReducer";
import productListReducer from "../reducers/productListReducer";

/**
 * @typedef {Object} RootState
 * @property {ReturnType<typeof productAddReducer>} productAdd
 * @property {ReturnType<typeof productListReducer>} productList
 */
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();


const store = configureStore({
  reducer: {
    productAdd: productAddReducer,
    productList: productListReducer,
  },
  compose: {
    ReactReduxDevTools,
  },
});

export default store;
