import { PowerSettingsNew } from "@mui/icons-material"
import { Avatar, Box } from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useAppDispatch } from "../../app/hooks"
import { logout } from "../../features/authSlice"

function AppBar() {
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Box
          height="60px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
          />
          <Box display="flex" alignItems="center" gap="5px">
            <PowerSettingsNew sx={{ color: "error.main" }} />
            <Typography onClick={logoutHandler}>Logout</Typography>
          </Box>
        </Box>
      </Container>
    </MuiAppBar>
  )
}
export default AppBar
