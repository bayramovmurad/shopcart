import { DATA, DECREASE, INCREASE, LOADING } from "./action"




const reducer = (state, action) => {
    if (action.type === INCREASE) {
        const itemId = action.payload.id;
        const updatedCart = state.cart.map(item =>
            item.id === itemId ? { ...item, amount: Math.min(item.amount + 1,10) } : item
        );
        return { ...state, cart: updatedCart };
    }

    if (action.type === DECREASE) {
        const itemId = action.payload.id;
        const updatedCart = state.cart.map(item => 
            item.id === itemId ? { ...item, amount: Math.max(item.amount - 1,1) } : item   
        );
      return { ...state, cart: updatedCart};
    }

    if (action.type === LOADING) {
        return { ...state, loading: true };
    }

    if (action.type === DATA) {
        const updatedCart = Array.from(action.payload.cart.values());
        return { ...state, loading: false, cart: updatedCart };
    }
    

    return state;
};

export default reducer