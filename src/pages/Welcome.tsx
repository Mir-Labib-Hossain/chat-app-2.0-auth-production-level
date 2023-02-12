import { Box, Typography } from "@mui/material"
import { useAppDispatch } from "../app/hooks"
import { changeTheme } from "../features/themeSlice"

import { Lock } from "@mui/icons-material"
import Typewriter from "../assets/svgs/Typewriter.svg"

const Home = () => {
  const dispatch = useAppDispatch()
  const handleTheme = () => {
    dispatch(changeTheme())
  }
  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundImage: `url(${Typewriter})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        gap: "30px",
        p: "20px",
      }}
    >
      <Typography variant="h2">Typewriter 2.0</Typography>
      <div>
        <Typography variant="body1">
          Send and receive messages without keeping your phone online.
        </Typography>
        <Typography variant="body2" textAlign="center">
          Use
          <Typography variant="body2" component="span" color="primary.main">
            Typewriter{" "}
          </Typography>
          on up to 4 linked devices and 1 phone at the same time.
        </Typography>
      </div>
      <Box display="flex" alignItems="center" color="text.secondary" gap="5px">
        <Lock sx={{ fontSize: "12px" }} />
        <Typography variant="caption">End-to-End Encrypted.</Typography>
      </Box>
    </Box>
  )
}

export default Home

const styles = {}
