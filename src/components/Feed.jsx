import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactAudioPlayer from "react-audio-player";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { width } from "@mui/system";

function Feed() {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    const fetchFeed = async () => {
      const res = await fetch(
        "https://www.toptal.com/developers/feed2json/convert?url=https://anchor.fm/s/cc5c7610/podcast/rss"
      );
      let data = await res.json();
      let items = data.items;
      console.log(items);
      setPodcasts(items);
    };

    fetchFeed();
  }, []);
  return (
    <Box flex={3} p={2}>
      {podcasts.map((podcast) => (
        <>
          <Card sx={{ minWidth: 345 }}>
            <CardHeader title={podcast.title} subheader={podcast.pubDate} />
            <CardMedia
              component="img"
              height="194"
              image={podcast.thumbnail}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {podcast.description}
              </Typography>
            </CardContent>
            <ReactAudioPlayer
              style={{ opacity: "40%", width: "100%" }}
              src={podcast.enclosure.link}
              controls
            />
          </Card>
        </>
      ))}
    </Box>
  );
}

export default Feed;
