import React from "react";
import axios from "axios";

function useFetch(url: string) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;