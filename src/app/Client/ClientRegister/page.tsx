"use client";
import React from "react";
import * as C from "../../../styles/form";
import { Container } from "@mui/material";

const ClientRegister = () => {
  return (
    <Container
      sx={{
        margin: "100px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <C.Title>Registrar Cliente</C.Title>
      <C.FormContainer component="form">
        <C.Input label="Nome" variant="outlined" color="secondary" />
        <C.Input
          label="Número do documento"
          variant="outlined"
          color="secondary"
        />
        <C.Input
          label="Tipo do documento"
          variant="outlined"
          color="secondary"
        />
        <C.Input label="Logradouro" variant="outlined" color="secondary" />
        <C.Input label="Número" variant="outlined" color="secondary" />
        <C.Input label="Bairro" variant="outlined" color="secondary" />
        <C.Input label="Cidade" variant="outlined" color="secondary" />
        <C.Input label="UF" variant="outlined" color="secondary" />
      </C.FormContainer>
      <C.ButtonRegister variant="outlined" color="secondary">
        Cadastrar
      </C.ButtonRegister>
    </Container>
  );
};

export default ClientRegister;
