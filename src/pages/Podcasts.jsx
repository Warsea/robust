import React, { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

const RSSURL = "https://anchor.fm/s/cc5c7610/podcast/rss";

function Podcasts() {
  const { name } = useParams();
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar currentPodcast={name} />
        <Feed currentPodcast={name} />
      </Stack>
    </>
  );
}

export default Podcasts;
