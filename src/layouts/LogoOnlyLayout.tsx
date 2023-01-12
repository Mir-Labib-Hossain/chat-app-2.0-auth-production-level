import { Outlet } from "react-router-dom"

const LogoOnlyLayout = () => {
  console.log("LogoOnlyLayout")

  return (
    <>
      <Outlet />
    </>
  )
}

export default LogoOnlyLayout
