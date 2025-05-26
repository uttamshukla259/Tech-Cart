const CartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cartItems: action.payload,
        totalAmount: action.payload.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        totalQuantity: action.payload.reduce(
          (acc, item) => acc + item.quantity,
          0
        ),
      };

    case "ADD_TO_CART":
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalAmount: state.totalAmount + action.payload.price,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          totalAmount: state.totalAmount + action.payload.price,
          totalQuantity: state.totalQuantity + 1,
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalAmount: state.totalAmount - action.payload.price,
          totalQuantity: state.totalQuantity - 1,
        };
      } else if (itemToRemove) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
          totalAmount: state.totalAmount - action.payload.price,
          totalQuantity: state.totalQuantity - 1,
        };
      }
      return state;

    case "REMOVE_ENTIRE_ITEM":
      const itemToRemoveEntirely = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        totalAmount:
          state.totalAmount -
          itemToRemoveEntirely.price * itemToRemoveEntirely.quantity,
        totalQuantity: state.totalQuantity - itemToRemoveEntirely.quantity,
      };


    case "ADD_TO_WISHLIST":
      const wishlistItemExists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (wishlistItemExists) {
        return state;
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "SET_WISHLIST":
      return {
        ...state,
        wishlistItems: action.payload, 
      };

    default:
      return state;
  }
};

export default CartReducer;
