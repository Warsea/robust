import React, { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PodcastFeed from "../components/PodcastFeed";
import Typography from "@mui/material/Typography";

function PodcastsPage() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} column={12}>
        <Grid item md={4} xs={0}>
          <Sidebar />
        </Grid>
        <Grid item md={8} xs={12}>
          <PodcastFeed />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PodcastsPage;
