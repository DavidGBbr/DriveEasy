import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled(Box)`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #9c27b0;
`;

export const Input = styled(TextField)`
  color: #fff;
`;

export const ButtonRegister = styled(Button)`
  margin-top: 20px;
  align-self: center;
  padding: 20px 50px;
`;
