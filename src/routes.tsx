import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import { Loading } from "./components/Spinner";

export const ProtectedRoutes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};


export const PublicRoutes = () => {
  const { signed } = useAuth();

  // if (loading) {
  //   return <div>Carregando...</div>;
  // }

  if (signed) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}