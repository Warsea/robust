import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { AudioContext } from "../contexts/AudioContext";

function Episodes(props) {
  const { setPlaying } = useContext(AudioContext);

  const playAudio = () => {
    setPlaying({ name: props.name, link: props.audioLink });
  };

  console.log(props.audioLink);
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.description.replace("<p>", "").replace("</p>", "")}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause" onClick={playAudio}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={props.image}
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
}

export default Episodes;
