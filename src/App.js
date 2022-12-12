import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import parse from "rss-to-json";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PodcastsPage from "./pages/PodcastsPage";
import { PodcastContext } from "./contexts/PodcastContext";
import PodcastPlayer from "./components/PodcastPlayer";
import { AudioContext } from "./contexts/AudioContext";
import About from "./pages/About";

// https://feed.podbean.com/warsisarjeelrahman/feed.xml

const ProgressCircle = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

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
  const [podcastChannels, setPodcastChannels] = useState([
    {
      name: "Robust News",
      key: "news",
      description:
        "One-stop destination for updates on the latest robotics and technology competitions and events.",
    },
    {
      name: "TechTalks",
      key: "techTalks",
      description:
        "Get involved with discussions on the latest technology trends.",
    },
    {
      name: "1 Minute Podcasts",
      key: "1-minute-podcast",
      description: "Guidance to lead you to success 1 minute at a time.",
    },
  ]);

  // Fetching podcasts
  useEffect(() => {
    setLoading(true);

    const fetchFeed = async () => {
      const res = await parse(
        "https://feed.podbean.com/warsisarjeelrahman/feed.xml"
      );
      setPodcasts(res);
      setLoading(false);
    };

    fetchFeed();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <AudioContext.Provider value={{ playing, setPlaying }}>
          <PodcastContext.Provider value={{ podcasts, podcastChannels }}>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={
                  loading ? <ProgressCircle /> : <Home podcasts={podcasts} />
                }
              />
              <Route path="/podcasts/:name" element={<PodcastsPage />} />
              <Route path="/about" element={<About />} />
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
