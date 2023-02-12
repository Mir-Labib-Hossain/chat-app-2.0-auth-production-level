import { Close } from "@mui/icons-material"
import { Avatar, Box, Divider, Typography } from "@mui/material"

const Inbox = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ minHeight: "60px", px: "10px" }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Avatar
            alt="Remy Sharp"
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
          />
          <Typography>John Doe</Typography>
        </Box>
        <Close sx={{ color: "error.main" }} />
      </Box>
      <Divider />
    </>
  )
}

export default Inbox
