import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: " -1px 0px 60px -16px rgba(0,0,0,0.68)",
          "-webkitBoxShadow": " -1px 0px 60px -16px rgba(0,0,0,0.68)",
          "-mozBoxShadow": " -1px 0px 60px -16px rgba(0,0,0,0.68)",
          borderRadius: "20px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default AuthLayout
