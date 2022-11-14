import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Podcasts from "./pages/Podcasts";

// https://anchor.fm/s/cc5c7610/podcast/rss

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Navbar />
        <Podcasts />
      </Box>
    </ThemeProvider>
  );
}

// <ReactAudioPlayer
// src="https://mcdn.podbean.com/mf/web/jemcps/Malinda_-_Music_Box_Acoustic_DemoAudio_7ks34.mp3"
// autoPlay
// controls
// />
// <Button>lmao</Button>

export default App;
