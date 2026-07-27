import { createContext, useContext, useReducer, useEffect } from "react";

/**
 * Cart Context
 * Manages shopping cart state across the application
 */

const CartContext = createContext();

const CART_STORAGE_KEY = "touche-aura-cart";

// Load cart from localStorage
const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (existingIndex >= 0) {
        const updated = [...state];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.payload.quantity,
        };
        return updated;
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) =>
          !(item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size)
      );

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], loadCart);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (item) => dispatch({ type: "REMOVE_FROM_CART", payload: item });
  const updateQuantity = (item, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { ...item, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
