import { useEffect } from "react";
import { useState } from "react"

export default function useFetch(url, cache = null) {
    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });
    

    const getFetch = async () => {
        try {
            setState(state => ({
                ...state,
                isLoading: true
            }));

            if(cache && cache.has(url)) {
                const data = cache.get(url);
                setState({
                    hasError: false,
                    error: null,
                    isLoading: false,
                    data
                });
                return;
            }

            const resp = await fetch(url);
            if(!resp.ok) throw Error(`The server response with a status code ${resp.status}`);
            const data = await resp.json();
            cache && cache.set(url, data); //verify if cache is enabled

            setState({
                hasError: false,
                error: null,
                isLoading: false,
                data
            });
        } catch (error) {
            setState(state => ({...state, isLoading:false, hasError:true, error}));
        }
    }
    
    

    useEffect(() => {
        getFetch();
    }, [url]);
  
    return { 
        ...state,
        reFetch: () => {
            (()=> {
                getFetch();
            })();
        }
    }
}