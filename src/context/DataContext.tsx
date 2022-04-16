import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
    return (
        <DataContext.Provider value={{}} >
            {children}
        </DataContext.Provider >
    )
}