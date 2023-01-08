import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

type Props = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const accessToken = !!useAppSelector((state) => state.auth.accessToken)
  console.log("PrivateRoute ", accessToken)

  if (accessToken) return <>{children}</>
  return <Navigate to="/auth" />
}

export default PrivateRoute
