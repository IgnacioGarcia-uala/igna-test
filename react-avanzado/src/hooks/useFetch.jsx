import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [status, setStatus] = useState({
        body: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const get = async () => {
            setStatus({
                body: null,
                loading: true,
                error: null
            })
    
            try {
                const resp = await fetch(url)
                if(!resp.ok) throw Error(resp.status)
    
                const data = await resp.json()
                setStatus({
                    body: data,
                    loading: false,
                    error: null
                })
            } catch(e) {
                setStatus({
                    body: null,
                    loading: false,
                    error: e
                })
            }
        }

        get(url)
    }, [url])

    return status
}