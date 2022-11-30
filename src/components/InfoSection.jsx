import React, { useContext } from "react";
import { PodcastContext } from "../contexts/PodcastContext";
import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Episodes from "./Episodes";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InfoSection() {
  const { podcasts } = useContext(PodcastContext);
  return (
    <>
      <Container sx={{ my: 5, py: 3 }} maxWidth="lg">
        <Link
          to="podcasts/news"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="h4" color="text.secondary">
            Robust News
          </Typography>
        </Link>
        <Typography variant="subtitle1" color="text.secondary" pb={3}>
          One-stop destination for updates on the latest robotics and technology
          competitions and events.
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
          {podcasts.items.map((podcast) => {
            let [type, title] = podcast.title.split("_");
            console.log(type);
            if (type === "news") {
              return (
                <Grid key={podcast.pubDate} item xs={4} sm={4}>
                  <Episodes
                    name={title}
                    description={podcast.description}
                    audioLink={podcast.enclosures[0].url}
                    image={podcast.enclosures[1].url}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
      <Container sx={{ my: 5, py: 3 }} maxWidth="lg">
        <Link
          to="podcasts/techTalks"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="h4" color="text.secondary">
            Robust News
          </Typography>
        </Link>
        <Typography variant="subtitle1" color="text.secondary" pb={3}>
          Get involved with discussions on the latest technology trends.
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
          {podcasts.items.map((podcast) => {
            let [type, title] = podcast.title.split("_");
            console.log(type);
            if (type === "techTalks") {
              return (
                <Grid key={podcast.pubDate} item xs={4} sm={4}>
                  <Episodes
                    name={title}
                    description={podcast.description}
                    audioLink={podcast.enclosures[0].url}
                    image={podcast.enclosures[1].url}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
    </>
  );
}

export default InfoSection;
