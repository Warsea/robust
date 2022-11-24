import React from "react";
import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InfoSection() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" color="text.secondary">
          Hello
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Hello
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ textAlign: "right" }} maxWidth="lg">
        <Typography variant="h4" color="text.secondary">
          Hello
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Hello
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h4" color="text.secondary">
          Hello
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Hello
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Item> Hello</Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InfoSection;
