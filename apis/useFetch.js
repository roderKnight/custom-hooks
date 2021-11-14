import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, []) //only change for the first time

    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true
    });

    console.log(state);

    
    useEffect(() => {
        // every time the url change
        setState({
            data: null,
            error: null,
            loading: true
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if(isMounted.current){
                    setState({
                        error: false,
                        loading: false,
                        data
                    });
                }
            
            });
    }, [url]);

    return state;
}
