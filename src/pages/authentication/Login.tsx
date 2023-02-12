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
  Checkbox,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { login } from "../../features/authSlice"

const Login = () => {
  const dispatch = useAppDispatch()
  const handleLogin = () => dispatch(login())
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
          src="https://ouch-cdn2.icons8.com/9FZFmNzLmJtt4cz8XtfpAlnQmY8bUxTOTqjXb-RabcE/rs:fit:624:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMx/LzQ2YzVhYjYyLWE2/OGYtNDlmZS1iOTUy/LTJiYTJiNjJjYWM0/YS5wbmc.png"
          width="100%"
          alt="img"
        />
        <Typography fontSize="small" align="center">
          Don't have an account ? <Link to="/auth/signup">Sign-Up</Link>
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
          <FormControlLabel
            control={<Checkbox color="warning" size="small" />}
            label={<Typography fontSize="small">Remember me</Typography>}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={handleLogin}
          sx={{ width: "fit-content" }}
        >
          <Typography color="white">Log-in</Typography>
        </Button>
        <Box display="flex" gap="10px" alignItems="center">
          <Typography fontSize="small">Or login with</Typography>
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

export default Login
