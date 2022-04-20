import { createContext, ReactNode, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({});


export const DataProvider = ({ children }: { children: ReactNode }) => {

    const [url, setUrl] = useState("http://localhost:3500/workshops?_page=1&_limit=9&_sort=date&_order=desc")
    const [limit, setLimit] = useState(9);
    const [value, setValue] = useState("");

    const { data: workshopsData, loading, error } = useFetch(url)

    const handleFilter = async (value: string, limit: number) => {
        if (value) {
            setLimit(9)
            setValue(value)
            setUrl(`http://localhost:3500/workshops?_page=1&_limit=${limit}&_sort=date&_order=desc&category=${value}`)
        } else {
            setLimit(9)
            setValue(value)
            setUrl(`http://localhost:3500/workshops?_page=1&_limit=${limit}&_sort=date&_order=desc`)
        }

    }

    const handleLoad = (num: number, value: string) => {
        setLimit((prev: number): number => { return prev + num })
        if (value) {
            setUrl(`http://localhost:3500/workshops?_page=1&_limit=${limit + num}&_sort=date&_order=desc&category=${value}`)
        } else {
            setUrl(`http://localhost:3500/workshops?_page=1&_limit=${limit + num}&_sort=date&_order=desc`)
        }

    }

    console.log(workshopsData)
    console.log(loading)
    console.log(error)

    return (
        <DataContext.Provider value={{ workshopsData, handleFilter, loading, handleLoad, limit, value }}>{children}</DataContext.Provider>
    )
}

export default DataContext;