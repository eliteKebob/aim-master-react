import { Navigate } from "react-router-dom";
import { IAuthResponse } from "../types/auth.types";

type IProtectedRouteProps = {
  user: IAuthResponse;
  children: any;
};

const ProtectedRoute = (props: IProtectedRouteProps) => {
  if (!props.user || props.user.access === "") {
    return <Navigate to="/" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
