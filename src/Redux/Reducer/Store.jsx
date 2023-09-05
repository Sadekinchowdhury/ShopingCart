import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import ProductReducer from "./ProductReducer";
 

const store = createStore(ProductReducer, composeWithDevTools());
export default store;