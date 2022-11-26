import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function Sidebar() {
  return (
    <Box flex={1} p={0.5} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <Typography variant="h6" color="text.primary">
          Podcasts
        </Typography>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Robust"
              sx={{ color: "white" }}
              secondary="Bangladesh's first podcast on robotics and technology."
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
