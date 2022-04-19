import { createContext, ReactNode } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({});

const URL_WORKSHOPS = "http://localhost:3500/workshops?_page=1&_limit=9&_sort=date&_order=desc"

export const DataProvider = ({ children }: { children: ReactNode }) => {

    const { data: workshopsData, loading, error } = useFetch(URL_WORKSHOPS)

    console.log(workshopsData)
    console.log(loading)
    console.log(error)

    return (
        <DataContext.Provider value={{ workshopsData }}>{children}</DataContext.Provider>
    )
}

export default DataContext;