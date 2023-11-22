import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

const APIKEY = "https://www.course-api.com/react-useReducer-cart-project";


export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [jsonData,setJsonData] = useState([]);

    const Increment = (itemId) => {
           const updatedData = jsonData.map((item) =>
               item.id === itemId ? { ...item, amount: Math.min(item.amount + 1,10) } : item
           );
           setJsonData(updatedData);
       
        
    };

    const Decrement = (itemId) => {
        const updatedData = jsonData.map((item)=> 
            item.id === itemId ? { ...item, amount: Math.max(item.amount  -1, 0) } :item
        )
        setJsonData(updatedData)
    }

    

    useEffect(()=>{
        (
            async () => {
               try {
                   const resp = await fetch(APIKEY);
                   const data = await resp.json();
                   setLoading(false)
                   setJsonData(data)
               } catch (error) {
                console.log(error);
               }
            }
        )()
    },[]);
    return (
        <AppContext.Provider value={{jsonData,Increment,Decrement,loading}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}