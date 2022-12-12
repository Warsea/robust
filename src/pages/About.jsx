import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Robust_logo from "../images/Robust_logo.png";
import Paper from "@mui/material/Paper";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  justifyContent: "left",
  alignItems: "center",
  paddingLeft: "50px",
  color: theme.palette.text.secondary,
  padding: "50px",
  background: "rgb(35, 35, 35, .0)",
  lineHeight: "60px",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

function About() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          display="flex"
          justifyContent="space-between"
          p={5}
        >
          <Box
            component="img"
            sx={{
              maxHeight: "400px",
            }}
            alt="Your logo."
            src={Robust_logo}
          />

          <StyledPaper>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              About Robust
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque quos, sed atque vel, aliquam vitae inventore quis
              officia doloribus, deserunt illo laudantium exercitationem
              dolorem. Enim, dicta ducimus perferendis natus ab maiores sapiente
              incidunt dignissimos, quisquam mollitia quam architecto labore
              aliquid alias delectus, officiis temporibus at deserunt cum! Odio,
              facilis! Quidem amet mollitia ratione ea voluptatum similique
              repellat perspiciatis quis animi at, nulla sed tempore facere
              voluptas et, maxime consequuntur placeat ut, iusto a! Tempore
              numquam exercitationem, illum, iste quis accusamus optio sequi hic
              ex, excepturi aut laboriosam minima asperiores tempora.
            </Typography>
          </StyledPaper>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
