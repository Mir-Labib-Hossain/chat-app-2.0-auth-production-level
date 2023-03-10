import { lazy, Suspense } from "react"
import { Navigate, useRoutes } from "react-router-dom"
import Loading from "../components/Loading"
import AuthLayout from "../layouts/Auth"
import LogoOnlyLayout from "../layouts/LogoOnlyLayout"
import MainLayout from "../layouts/Main"
import PrivateRoute from "../middlewares/PrivateRoute"
import PublicRoute from "../middlewares/PublicRoute"

const Error = lazy(() => import("../pages/Error"))
const Login = lazy(() => import("../pages/authentication/Login"))
const Signup = lazy(() => import("../pages/authentication/Signup"))
const Welcome = lazy(() => import("../pages/Welcome"))
const Inbox = lazy(() => import("../pages/inbox"))

const Router = () => {
  console.log("Router")

  return (
    <Suspense fallback={<Loading />}>
      {useRoutes([
        {
          path: "/auth",
          element: (
            <PublicRoute>
              <AuthLayout />
            </PublicRoute>
          ),
          children: [
            { path: "", element: <Navigate to="/auth/login" /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
        {
          path: "/",
          element: (
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          ),
          children: [
            { path: "", element: <Welcome /> },
            {
              path: ":chatId",
              element: <Inbox />,
            },
          ],
        },
        {
          path: "*",
          element: <LogoOnlyLayout />,
          children: [
            { path: "500", element: <Error /> },
            { path: "404", element: <Error /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
      ])}
    </Suspense>
  )
}
export default Router
