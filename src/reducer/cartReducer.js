//State are the current values that the object is holding, Action is the information that we are passing
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
        return {...state, cartList: payload.products} //It's holding the current data and adding ONLY to cartList the data from the payload
    case "REMOVE_FROM_CART":
        return {...state, cartList: payload.products} //return the whole state and only modifies the cart
    case "UPDATE_TOTAL":
        return {...state, total: payload.total}
        /*case "UPDATE_VALUE":
        return*/
    default:
        throw new Error('No case Found in CartReducer');
  }
};
