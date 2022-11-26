import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PoweredBy() {
  return (
    <Container maxWidth="md" sx={{ pb: 4 }}>
      <Box
        sx={{
          justifyContent: "center",
          alignContent: "center",
          color: "text.primary",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Powered By:</Typography>
        <Typography variant="h3" color="text.secondary">
          Robotics Club of Brac University
        </Typography>
      </Box>
    </Container>
  );
}

export default PoweredBy;
