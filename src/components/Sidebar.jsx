import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";

function Sidebar(props) {
  const { podcasts, podcastChannels } = useContext(PodcastContext);
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h6" color="text.primary">
          Podcasts
        </Typography>
        {podcastChannels.map((podcastChannel) => (
          <ListItem disablePadding>
            <Link
              to={`/podcasts/${podcastChannel.key}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ListItemButton
                selected={
                  props.currentPodcast === podcastChannel.key ? true : false
                }
              >
                <ListItemText
                  primary={podcastChannel.name}
                  sx={{ color: "white" }}
                  secondary={podcastChannel.description}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
