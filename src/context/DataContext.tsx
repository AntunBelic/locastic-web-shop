import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({});

const URL_WORKSHOPS = "http://localhost:3500/workshops"

export const DataProvider = ({ children }: any) => {

    const { data, loading, error } = useFetch(URL_WORKSHOPS)

    console.log(data)
    console.log(loading)
    console.log(error)

    return (
        <DataContext.Provider value={{}} >
            {children}
        </DataContext.Provider >
    )
}

export default DataContext;