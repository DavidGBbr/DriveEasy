import { Box } from "@mui/material";
import styled from "styled-components";

export const ContainerInfo = styled.div`
  width: 50%;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    margin-top: 20px;
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    margin-top: 80px;
    width: 100%;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 500px;
  max-width: 100%;
`;
