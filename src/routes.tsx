import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";

export const ProtectedRoutes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};


export const PublicRoutes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (signed) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}