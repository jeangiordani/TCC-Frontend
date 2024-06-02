import { useState } from 'react';
import { api } from '../api/api';

export const usePost = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const postData = async (url: string, data: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.request({
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data,
            });
            console.log(response);
            return response;
        } catch (err: any) {
            console.log(err);
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { postData, loading, error };
};
