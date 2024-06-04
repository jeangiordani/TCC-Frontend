import { useState, useEffect, useCallback } from 'react';
import { api } from '../api/api';
import { useAuth } from '../context/auth';




export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {logout} = useAuth(); 

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(url);
            setData(response.data);
            
        } catch (err: any) {
            setError(err);
            if(err.response.status === 401){
                logout();
            }
            
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};
