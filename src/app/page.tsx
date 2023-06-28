"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import * as C from "../styles/page";

const Home = () => {
  return (
    <div>
      <Container sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <C.ContainerInfo>
            <h1>Desloque-se com facilidade e conforto.</h1>

            <p>
              Nosso sistema de deslocamento é ideal para todas as ocasiões, com
              uma interface intuitiva e recursos avançados. Faça de cada viagem
              uma jornada prazerosa.
            </p>
          </C.ContainerInfo>
          <C.Img src="/images/passenger_request.svg" />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
