import Box from "@mui/system/Box";
import React from "react";
import background from "../images/Sandra.jpg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import InfoSection from "../components/InfoSection";
import PoweredBy from "../components/PoweredBy";
import { useState } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  justifyContent: "left",
  alignItems: "center",
  paddingLeft: "50px",
  color: theme.palette.text.secondary,
  width: "60%",
  padding: "50px",
  background: "rgb(35, 35, 35, .5)",
  lineHeight: "60px",
  "&:hover": {
    background: "rgb(35, 35, 35, .6)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

const StyledBackground = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  alignItems: "center",
  backgroundImage: `url(${background})`,
  height: "500px",
  marginBottom: "50px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.up("md")]: {
    justifyContent: "left",
    paddingLeft: "50px",
  },
}));

function Home() {
  const [hover, setHover] = useState(false);

  return (
    // Intro
    <>
      <StyledBackground>
        <StyledPaper
          elevation={hover ? 7 : 2}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Typography variant="h5"> Introducing</Typography>
          <Typography variant="h3" sx={{ color: "#A23A36" }}>
            ROBUST
          </Typography>
          <Typography variant="subtitle1">
            The first tech podcast in Bangladesh.
          </Typography>
        </StyledPaper>
      </StyledBackground>

      <InfoSection />
      <PoweredBy />
    </>
  );
}

export default Home;
