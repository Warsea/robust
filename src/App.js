import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import parse from "rss-to-json";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutRobu from "./pages/AboutRobu";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import { PodcastContext } from "./contexts/PodcastContext";
import PodcastPlayer from "./components/PodcastPlayer";
import { AudioContext } from "./contexts/AudioContext";

// https://feed.podbean.com/warsisarjeelrahman/feed.xml

function App() {
  // Theme setting
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // states
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(null);

  const [podcasts, setPodcasts] = useState([]);

  // Fetching podcasts
  useEffect(() => {
    setLoading(true);

    const fetchFeed = async () => {
      const res = await parse(
        "https://feed.podbean.com/warsisarjeelrahman/feed.xml"
      );
      console.log(res);
      setPodcasts(res);
      setLoading(false);
    };

    fetchFeed();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <AudioContext.Provider value={{ playing, setPlaying }}>
          <PodcastContext.Provider value={{ podcasts }}>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={
                  loading ? <CircularProgress /> : <Home podcasts={podcasts} />
                }
              />
              <Route
                path="/podcasts"
                element={<Podcasts podcasts={podcasts} />}
              />
              <Route path="/about_robu" element={<AboutRobu />} />
            </Routes>
            <Footer />
            {playing === null ? null : <PodcastPlayer />}
          </PodcastContext.Provider>
        </AudioContext.Provider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
