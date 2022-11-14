import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/* const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6">Robust</Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar; */

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <BroadcastOnHomeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Robust
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Podcasts</Button>
          <Button color="inherit">About Robu</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
