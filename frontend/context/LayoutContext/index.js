import React, {createContext}  from 'react'

export const LayoutContext =  createContext({});

const LayoutProvider =  ({children, IsMobile}) => {
    
    

    const state ={
        IsMobile,

    };
        
    return (
        <LayoutContext.Provider value ={state}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;




