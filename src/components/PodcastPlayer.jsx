import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactAudioPlayer from "react-audio-player";
import { AudioContext } from "../contexts/AudioContext";

function PodcastPlayer() {
  const { playing } = useContext(AudioContext);
  useEffect(() => {}, [playing]);
  return (
    <Box>
      <Paper
        variant="outlined"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
        }}
      >
        <Grid container columns={{ xs: 12 }} sx={{ px: 2 }}>
          <Grid item xs={4}>
            <Typography variant="h5">{playing.name}</Typography>
            <Typography variant="subtitle2">Now Playing...</Typography>
          </Grid>
          <Grid item xs={8} sx={{ justifyContent: "flex-end" }}>
            <ReactAudioPlayer
              src={playing.link}
              autoPlay
              controls
              controlsList="nodownload"
              style={{ opacity: "40%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

//  <Box>
// <Typography variant="h5">Episode</Typography>
// <Typography variant="subtitle2">Now Playing...</Typography>
// </Box>
// <Box sx={{ justifyContent: "flex-end" }}>
// <ReactAudioPlayer
//   src="https://mcdn.podbean.com/mf/web/jemcps/Malinda_-_Music_Box_Acoustic_DemoAudio_7ks34.mp3"
//   autoPlay
//   controls
//   style={{ opacity: "40%" }}
// />
// </Box>

//  <ReactAudioPlayer
// src="https://mcdn.podbean.com/mf/web/jemcps/Malinda_-_Music_Box_Acoustic_DemoAudio_7ks34.mp3"
// autoPlay
// controls
// />
// <Button>lmao</Button>

export default PodcastPlayer;
