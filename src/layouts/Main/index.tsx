import { Outlet } from "react-router-dom";
import AppBar from "./Appbar";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
