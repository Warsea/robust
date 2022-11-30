import React, { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PodcastFeed from "../components/PodcastFeed";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Progress = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <CircularProgress />
    </Box>
  );
};

function PodcastsPage() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [name]);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} column={12}>
        <Grid item md={4} xs={0}>
          <Sidebar currentPodcast={name} />
        </Grid>
        <Grid item md={8} xs={12}>
          {loading ? <Progress /> : <PodcastFeed currentPodcast={name} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PodcastsPage;
