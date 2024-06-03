export type LoginType = {
    email: string;
    password: string;
  };
  
export interface AuthContextData {
    signed: boolean;
    user?: object | null;
    loading: boolean;
    login: ({}: LoginType) => Promise<void>;
    logout: () => void;
    error?: string;
    setLoading: (loading: boolean) => void;
}