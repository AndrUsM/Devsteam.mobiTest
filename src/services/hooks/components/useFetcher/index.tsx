import { AxiosPromise } from "axios";
import { useEffect, useState } from "react";
import { Service } from "../../types";

export function useFetcher<T>(requestFunc: AxiosPromise<any>) {
    const [resoult, setResoult] = useState<Service<T>>({
        status: 'loading'
    });

    useEffect(() => {
        requestFunc
            .then(response => setResoult({
                status: 'loaded',
                payload: response.data
            }))
            .catch(error => setResoult({
                status: 'error',
                error: error
            }))
    }, []);

    return resoult;
}