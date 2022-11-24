import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Box
      bgcolor="rgba(255, 255, 255, 0.12)"
      color="white"
      mt={3}
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box>Credits</Box>
            <Box>Email</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>Address</Box>
            <Box>Phone</Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Robust &reg; 2022
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
