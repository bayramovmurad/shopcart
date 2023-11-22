import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "./reducer/reducer";
import { DATA, DECREASE, INCREASE, LOADING } from "./reducer/action";
const APIKEY = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
    loading: true,
    cart:[],
}



export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } });
    };
    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } });
    };
    
    useEffect(() => {
        (
            async () => {
                try {
                    dispatch({ type: LOADING });
                    const response = await fetch(APIKEY);
                    const cart = await response.json();
                    dispatch({ type: DATA, payload: { cart } });
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);

    

    return (
        <AppContext.Provider value={{ ...state, increase ,decrease}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};