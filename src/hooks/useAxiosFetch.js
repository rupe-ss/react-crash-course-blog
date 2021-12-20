import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //we'll call this is mounted and we really want the component to be mounted and not attempt to apply something after it is unmounted which would also be a memory leak so we'll set is mounted to true and we'll check that status as we apply things
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                //This is part of axios look for documentation
                const response = await axios.get(url, {
                    cancelToken: source.token,
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
                // Setting settimeout to see Loading display on screen
                //finally {
                //isMounted && setTimeout(() setIsLoading (false), 2000); =>
                //}
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        fetchData(dataUrl);

        const cleanUp = () => {
            //console.log('Clean up function') to check function is running
            isMounted = false;
            source.cancel();
        };

        return cleanUp;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
};

export default useAxiosFetch;
