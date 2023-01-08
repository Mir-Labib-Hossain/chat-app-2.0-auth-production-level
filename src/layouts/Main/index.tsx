import { Outlet } from "react-router-dom"
import AppBar from "./Appbar"

const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default MainLayout
