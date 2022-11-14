import React, { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Stack from "@mui/material/Stack";

const RSSURL = "https://anchor.fm/s/cc5c7610/podcast/rss";

function Podcasts() {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </>
  );
}

export default Podcasts;
