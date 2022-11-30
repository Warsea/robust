import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { useEffect } from "react";
import { PodcastContext } from "../contexts/PodcastContext";
import Episodes from "./Episodes";

function PodcastFeed(props) {
  const { podcasts } = useContext(PodcastContext);

  return (
    <Stack spacing={3} paddingTop={3} sx={{ height: "100vh" }}>
      <Typography variant="h4" color="text.secondary">
        Episodes
      </Typography>
      {podcasts.items.map((podcast) => {
        let [type, title] = podcast.title.split("_");
        console.log(type);
        if (type === props.currentPodcast) {
          return (
            <Episodes
              key={podcast.pubDate}
              name={title}
              description={podcast.description}
              audioLink={podcast.enclosures[0].url}
              image={podcast.enclosures[1].url}
            />
          );
        }
      })}
    </Stack>
  );
}

export default PodcastFeed;
