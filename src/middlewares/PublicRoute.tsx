import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

type Props = {
  children: React.ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  console.log("PublicRoute ");
  // const accessToken = !!useAppSelector((state) => state.auth.accessToken);
  // if (!accessToken)
   return <>{children}</>;
  return <Navigate to="/" />;
};

export default PublicRoute;
