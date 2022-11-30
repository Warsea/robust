import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavDrawer from "./NavDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import styled from "@mui/system/styled";
import { Link, redirect, useNavigate } from "react-router-dom";
import Robust_logo from "../images/Robust_logo.png";

const MenuToggler = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const AppbarOptions = styled(Box)(({ theme }) => ({
  display: "None",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loaded) {
      navigate("/");
      setLoaded(true);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavDrawer open={openNav} setOpen={setOpenNav} />
      <AppBar position="static">
        <Toolbar>
          <MenuToggler>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenNav(true)}
            >
              <MenuIcon />
            </IconButton>
          </MenuToggler>

          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Your logo."
            src={Robust_logo}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <AppbarOptions>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Button color="inherit">Home</Button>
            </Link>

            <Button color="inherit">
              <Link
                to="/podcasts/news"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Podcasts
              </Link>
            </Button>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button color="inherit">About</Button>
            </Link>
          </AppbarOptions>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
