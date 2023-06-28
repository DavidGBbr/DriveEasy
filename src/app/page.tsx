"use client";
import { Box, Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className="title">
              Descubra uma nova forma de se deslocar com facilidade e conforto.
            </h1>

            <p>
              Seja para trabalho, lazer ou qualquer ocasião, nosso sistema de
              deslocamento é a solução ideal para você. Com uma interface
              intuitiva e recursos avançados, proporcionamos uma experiência
              única, tornando cada viagem uma jornada prazerosa.
            </p>
          </div>

          <img src="/images/passenger_request.svg" style={{ maxWidth: 600 }} />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
