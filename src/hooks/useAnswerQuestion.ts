import { useState } from 'react';
import { api } from '../api/api';

export const useAnswerQuestion = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const answerQuestion = async (mockExamId: string, alternativeId: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.request({
                method: 'PATCH',
                url: `/mock-exams/answers/${mockExamId}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: {
                    alternative_id: alternativeId,
                },
            });
            console.log(response);
            return response;
        } catch (err: any) {
            console.log(err);
            setError(err);
            throw err; // Re-throw the error to be handled outside
        } finally {
            setLoading(false);
        }
    };

    return { answerQuestion, loading, error };
};
