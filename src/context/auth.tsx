import { createContext, useContext, useEffect, useState } from "react";

import { AuthContextData, LoginType } from "../@types/authContext";

import { api } from "../api/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        async function loadStorageData() {
          const storageUser = localStorage.getItem("user");
          const storageToken = localStorage.getItem("token");
    
          if (storageUser && storageToken) {
            setUser(JSON.parse(storageUser));
          }
          setLoading(false);
        }
    
        loadStorageData();
      }, []);

      const login = async ({ email, password }: LoginType) => {
          setLoading(true);
          const res = await api.post("/auth/login", {
            email: email,
            password: password,
          });
          
          const userData = await api.post<User>("/auth/me",{}, {
            headers:{
                  Authorization: `Bearer ${res.data.access_token}`,
                  Accept: 'application/json',
            }
          
          });
          
          setUser(userData.data);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(userData.data));
          setLoading(false);
          return res;
      };
    
      const logout = () => {
        localStorage.clear();
        setUser(null);
      };
    

    return (
        <AuthContext.Provider
          value={{ signed: !!user, user, loading, login, logout, setLoading }}
        >
          {children}
        </AuthContext.Provider>
      );
    };
    
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an UserProvider");
    }
    return context;
};