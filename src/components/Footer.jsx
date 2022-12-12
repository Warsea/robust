import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Robust
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: "action.hover", p: 3, pb: 7 }} component="footer">
      <Typography
        variant="h6"
        color="text.disabled"
        align="center"
        gutterBottom
      >
        Contact us:
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="div"
        px={5}
      >
        <Box component="span" color="text.secondary">
          <FacebookIcon />
        </Box>
        <Box component="span" color="text.secondary">
          <EmailIcon />
        </Box>
        <Box component="span" color="text.secondary">
          <PhoneEnabledIcon />
        </Box>
      </Typography>

      <Copyright />
    </Box>
  );
}

export default Footer;
