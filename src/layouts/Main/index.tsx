import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import AppBar from "./Appbar"
import Sidebar from "./Sidebar"

const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Grid container height="calc(100vh - 60px)">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}

export default MainLayout
