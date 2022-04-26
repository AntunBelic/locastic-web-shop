import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({});

export interface IWorkShopProps {
    category: string;
    date: string;
    desc: string;
    id: number;
    imageUrl: string;
    price: number;
    title: string;
    userId: number;
    amount: number;
    total: number;
}


export const DataProvider = ({ children }: { children: ReactNode }) => {



    const [workshops, setWorkshops] = useState<IWorkShopProps[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [value, setValue] = useState<string>("");
    const [cart, setCart] = useState([] as IWorkShopProps[]);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    useEffect(() => {
        loadWorkshops(page, value);
    }, [page, value])

    const loadWorkshops = async (page: number, value: string) => {
        setLoading(true);
        if (page === 1 && value) {
            return await axios.get(`http://localhost:3500/workshops?_page=1&_limit=9&_sort=date&_order=desc&category=${value}`)
                .then((response) => setWorkshops(response.data))
                .catch((err) => setError(err.message))
                .finally(() => {
                    setLoading(false)
                })
        } else if (page === 1 && !value) {
            return await axios.get(`http://localhost:3500/workshops?_page=1&_limit=9&_sort=date&_order=desc`)
                .then((response) => setWorkshops(response.data))
                .catch((err) => setError(err.message))
                .finally(() => {
                    setLoading(false)
                })
        } else if (page !== 1 && value) {
            return await axios.get(`http://localhost:3500/workshops?_page=${page}&_limit=9&_sort=date&_order=desc&category=${value}`)
                .then((response) => setWorkshops((prev) => [...prev, ...response.data]))
                .catch((err) => setError(err.message))
                .finally(() => {
                    setLoading(false)
                })
        } else if (page !== 1 && !value) {
            return await axios.get(`http://localhost:3500/workshops?_page=${page}&_limit=9&_sort=date&_order=desc`)
                .then((response) => setWorkshops((prev) => [...prev, ...response.data]))
                .catch((err) => setError(err.message))
                .finally(() => {
                    setLoading(false)
                })
        }
    }


    const handleFilter = (value: string) => {
        setValue(value)
        setPage(1)
    }

    const handleLoadMore = () => {
        setPage((prev) => { return prev + 1 })
    }

    const addToCart = (item: IWorkShopProps) => {
        if (cart.length < 1) {
            setOpenDrawer(true)
        }
        setCart((prev: IWorkShopProps[]) => {
            const isItemInCart = prev.find(workshop => workshop.id === item.id)
            if (isItemInCart) {
                return prev.map(workshop => workshop.id === item.id
                    ? { ...workshop, amount: workshop.amount + 1, total: ((workshop.amount) + 1) * workshop.price }
                    : workshop)
            }
            return [...prev, { ...item, amount: 1, total: item.price }]
        })
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    const handleCartItemChange = (item: IWorkShopProps, event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setCart((prev: IWorkShopProps[]) => {
            return prev.map(workshop => workshop.id === item.id
                ? { ...workshop, amount: parseInt(event.target.value), total: parseInt(event.target.value) * workshop.price }
                : workshop)
        })
    }

    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }

    const handleRemoveItem = (item: IWorkShopProps) => {
        setCart((prev) => {
            return prev.filter((workshop) => {
                return workshop !== item
            })
        })
    }



    return (
        <DataContext.Provider value={{ workshops, loading, error, handleFilter, handleLoadMore, addToCart, openDrawer, cart, handleCloseDrawer, handleCartItemChange, handleOpenDrawer, handleRemoveItem }}>{children}</DataContext.Provider>
    )
}

export default DataContext;