import { Edit } from "@mui/icons-material"
import { IconButton, ListItem } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        minHeight: "100%",
        bgcolor: "background.paper",
        borderRight: ".5px solid grey",
        py: 0,
      }}
    >
      <ListItem
        secondaryAction={
          <IconButton>
            <Edit color="primary" />
          </IconButton>
        }
        disableGutters
        sx={{ minHeight: "60px" }}
      ></ListItem>
      <Divider />
      <Link to="/1">
        <ListItemButton alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                Just now
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {" — I'll be in your neighborhood doing errands this…"}
                </Typography>
              </>
            }
          />
        </ListItemButton>
      </Link>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              8:10am
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {" — Wish I could come, but I'm out of town this…"}
              </Typography>
            </>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              1 day ago
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {" — Do you have Paris recommendations? Have you ever…"}
              </Typography>
            </>
          }
        />
      </ListItemButton>
    </List>
  )
}
