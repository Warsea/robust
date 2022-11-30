import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Robust_logo from "../images/Robust_logo.png";

function NavDrawer(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Drawer open={props.open} onClose={() => props.setOpen(false)}>
        <Box textAlign="center" minHeight="100vh" width="300px">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <ListItemButton onClick={() => props.setOpen(false)}>
                <HomeIcon />
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ListItemButton onClick={() => props.setOpen(false)}>
                <Box
                  component="img"
                  sx={{
                    height: 24,
                  }}
                  alt="Your logo."
                  src={Robust_logo}
                />
                <ListItemText primary="About" />
              </ListItemButton>
            </Link>
            <ListItemButton onClick={handleClick}>
              <PodcastsIcon />
              <ListItemText primary="Podcasts" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  to="podcasts/news"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => props.setOpen(false)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Robust News" />
                  </ListItemButton>
                </Link>
                <Link
                  to="/podcasts/techTalks"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => props.setOpen(false)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="TechTalks" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavDrawer;
