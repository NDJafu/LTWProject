import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const getCartData = () => {
  let localCartData = localStorage.getItem("itemList");
  if (localCartData === "null") {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getCartData(),
  total_item: "",
  total_price: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, size, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, size, amount, product } });
  };

  const setAmount = (id, amount) => {
    dispatch({ type: "SET_AMOUNT", payload: { id, amount } });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("itemList", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        setAmount,
        setIncrease,
        setDecrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// export a function that call the useContext hooks instead of importing useContext and useContext(CartContext) all the time.
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
