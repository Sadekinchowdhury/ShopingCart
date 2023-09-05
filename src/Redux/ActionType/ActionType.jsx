export const ADD_TO_CART = "ADD_TO_CART";
export const addTocart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  export const REMOVE_TO_CART = "REMOVE_TO_CART";
  export const removeTocart = (product) => {
    return {
      type: REMOVE_TO_CART,
      payload: product,
    };
  };