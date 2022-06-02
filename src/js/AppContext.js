import React, { useState } from "react";

export const AppContext = React.createContext();

export default function GlobalContext({children})
{
    const [cart,setCart] = useState([]);  
    const contextValue = {
        cart,
        setCart
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}