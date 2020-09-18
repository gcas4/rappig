export const initialState = {
    cart: [],
    filters: {
      min: null,
      max: null,
      name: null
    }
  };
  
  export const storeReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM_TO_CART":
        const productInCart = state.cart.findIndex(product => {
          return product.id === action.product.id;
        });
  
        let newCart;
  
        if (productInCart === -1) {
          // Se ele não achar o produto no carrinho
          newCart = [...state.cart, { ...action.product, quantity: action.select }];
        } 
        else {
          // Se ele achar o produto no carrinho
          newCart = state.cart.map(product => {
            if (product.id === action.product.id) {
              return {
                ...product
              };
            }
            return product;
          });
        }
  
        return { ...state, cart: newCart };
      case "REMOVE_ITEM_FROM_CART": {
        const newCart = state.cart.filter(product => {
          return product.id !== action.productId;
        });
  
        return { ...state, cart: newCart };
      }
      case "SET_FILTERS":
        return {
          ...state,
          filters: action.filters
        };
      case "RESET_FILTERS":
        return {
          ...state,
          filters: initialState.filters
        };
      default:
        return state;
    }
  };