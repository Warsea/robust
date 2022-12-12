import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ReactAudioPlayer from "react-audio-player";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import { PodcastContext } from "../contexts/PodcastContext";

function Feed() {
  const { podcasts } = useContext(PodcastContext);
  return (
    <Box flex={3} p={2}>
      {podcasts.items.map((podcast) => (
        <Card>
          <CardHeader title={podcast.title} />
          <CardMedia
            component="img"
            height="194"
            image={podcast.enclosures[1].url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {podcast.description}
            </Typography>
          </CardContent>
          <ReactAudioPlayer
            style={{ opacity: "40%", width: "100%" }}
            src={podcast.enclosures[0].url}
            controls
          />
        </Card>
      ))}
    </Box>
  );
}

export default Feed;
