import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

//This is the initial state when a user is for first time.
const initialState = {
  cartList: [],
  total: 0,
};

//Link of the context with the initState
const CartContext = createContext(initialState);

//Main function that needs a child component to add
//App is the indicate, because it connects all the pages and components
export const CartProvider = ({ children }) => {
  //State is holding all the states (total and Cart)
  //With dispatch I can use the functions inside the switch
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //function to Add to Cart
  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product); //Concatenating the new product to the CartList on the state
    updateTotal(updatedCart); //this update the total every time that from the cart, something is added
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart
      },
    });
  };

  //Funtion to remove from cart
  const removeFromCart = (product) => {
    //Filter maps all the objects on the array and get those that are NOT equal to the product to update the cart without it.
    const updatedCart = state.cartList.filter(current => current.id !== product.id); //This get only the products that are not the one that are looking for
    updateTotal(updatedCart); //this update the total every time that from the cart, something is removed
    dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          products: updatedCart
        },
      });
  }

  const updateTotal = (products) =>{
    let total = 0;
    products.forEach(product => total = total + product.price);

    dispatch({
      type:'UPDATE_TOTAL',
      payload:{
        total
      }
    })
  }

  const value = {
    total: state.total,
    cartList: state.cartList,
    //Making the functions visible 
    addToCart,
    removeFromCart,
    updateTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//This function is to handle and use cart everywhere
export const useCart = () => {
  return useContext(CartContext);
};
