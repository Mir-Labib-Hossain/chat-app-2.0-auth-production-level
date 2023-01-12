import {
  Facebook,
  Google,
  Lock,
  Person,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { login } from "../../features/authSlice"

const Signup = () => {
  const dispatch = useAppDispatch()
  console.log("signup")

  const handleSignup = () => {
    dispatch(login())
  }

  const InputStyled = styled(TextField)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }))
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Box
      m={5}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      width="100%"
    >
      <Box width="400px">
        <img
          src="https://ouch-cdn2.icons8.com/RQLw_7FAGpm_wLj-VDCKxkCniVxYnKsyiGkcdGykcuI/rs:fit:323:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODYz/L2UzZTk2MDA0LWYy/ZGEtNDZjZi1hMzRi/LWE5NzNiOTNiMWE4/MS5wbmc.png"
          width="100%"
          alt="img"
        />
        <Typography fontSize="small" align="center">
          Already have an account ? <Link to="/auth/login">Log-in</Link>
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={5}
        width="400px"
      >
        <Typography variant="h3" fontWeight="bold">
          Log In
        </Typography>
        <Box display="flex" flexDirection="column" gap="20px">
          <Box>
            <InputLabel shrink>Username</InputLabel>
            <Input
              sx={{ p: 0 }}
              type="text"
              fullWidth
              placeholder="Your name"
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <InputLabel shrink>Email</InputLabel>
            <Input
              sx={{ p: 0 }}
              type="text"
              fullWidth
              placeholder="email@gmail.com"
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <InputLabel shrink>Password</InputLabel>
            <Input
              sx={{ p: 0 }}
              type={showPassword ? "text" : "password"}
              fullWidth
              placeholder="* * * * * * * *"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <InputLabel shrink>Confirm Password</InputLabel>
            <Input
              sx={{ p: 0 }}
              type="password"
              fullWidth
              placeholder="* * * * * * * *"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={handleSignup}
          sx={{ width: "fit-content" }}
        >
          <Typography color="white">Sign-Up</Typography>
        </Button>
        <Box display="flex" gap="10px" alignItems="center">
          <Typography fontSize="small">Or signup with</Typography>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "#325A95",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "#00A5F8",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "#F4283A",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <Google />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Signup
