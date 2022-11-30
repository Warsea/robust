import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h6" color="text.primary">
          Podcasts
        </Typography>
        <ListItem disablePadding>
          <Link
            to="/podcasts/news"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemButton
              selected={props.currentPodcast === "news" ? true : false}
            >
              <ListItemText
                primary="Robust news"
                sx={{ color: "white" }}
                secondary="Bangladesh's first podcast on robotics and technology."
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/podcasts/techTalks"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemButton
              selected={props.currentPodcast === "techTalks" ? true : false}
            >
              <ListItemText
                primary="TechTalks"
                sx={{ color: "white" }}
                secondary="Bangladesh's first podcast on robotics and technology."
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
