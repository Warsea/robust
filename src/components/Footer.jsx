import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        component="p"
      >
        Give social links
      </Typography>
      <Copyright />
    </Box>
    // <Box
    //   bgcolor="rgba(255, 255, 255, 0.12)"
    //   color="white"
    //   mt={3}
    //   px={{ xs: 3, sm: 10 }}
    //   py={{ xs: 5, sm: 6 }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={6}>
    //         <Box>Credits</Box>
    //         <Box>Email</Box>
    //       </Grid>
    //       <Grid item xs={12} sm={6}>
    //         <Box>Address</Box>
    //         <Box>Phone</Box>
    //       </Grid>
    //     </Grid>
    //     <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
    //       Robust &reg; 2022
    //     </Box>
    //   </Container>
    // </Box>
  );
}

export default Footer;
