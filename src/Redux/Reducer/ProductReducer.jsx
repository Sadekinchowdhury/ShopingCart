import { ADD_TO_CART, REMOVE_TO_CART } from "../ActionType/ActionType";
 
 
 
const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  const slectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (slectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== slectedProduct.id
        );
        slectedProduct.quantity = slectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, slectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_TO_CART:
      if (slectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== slectedProduct.id
        );
        slectedProduct.quantity = slectedProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, slectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default productReducer;
