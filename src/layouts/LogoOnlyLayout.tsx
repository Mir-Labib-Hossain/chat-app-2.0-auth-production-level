import { Link, Outlet } from "react-router-dom";

type Props = {};

const LogoOnlyLayout = (props: Props) => {
  console.log("LogoOnlyLayout");
  
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Outlet />
    </>
  );
};

export default LogoOnlyLayout;
