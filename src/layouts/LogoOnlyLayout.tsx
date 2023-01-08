import { Link, Outlet } from "react-router-dom"

const LogoOnlyLayout = () => {
  console.log("LogoOnlyLayout")

  return (
    <>
      <Link to={"/"}>Home</Link>
      <Outlet />
    </>
  )
}

export default LogoOnlyLayout
