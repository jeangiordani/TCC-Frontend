export type LoginType = {
    email: string;
    password: string;
  };
  
export interface AuthContextData {
    signed: boolean;
    user?: any | null;
    loading: boolean;
    login: ({}: LoginType) => any;
    logout: () => void;
    error?: string;
    setLoading: (loading: boolean) => void;
}