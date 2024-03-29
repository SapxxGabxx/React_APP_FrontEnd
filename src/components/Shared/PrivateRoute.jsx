import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useMemo } from "react";

export default function PrivateRoute() {
  const auth = useSelector((state) => state.autenticazione);

  const isAuthenticated = useMemo(() => {
    return !!Object.keys(auth).filter((key) => auth[key]).length;
  }, [auth]);

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
