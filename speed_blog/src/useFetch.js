import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('çould not fetch data');
                }
                return res.json()
            }) 
            .then(data => {
                setData(data);
                setIsloading(false);
                setError(null);
            })
            .catch(err =>{
                setIsloading(false);
                setError(err.message);
            });
    }, [url]);

    return {data, isloading, error}
};

export default useFetch;