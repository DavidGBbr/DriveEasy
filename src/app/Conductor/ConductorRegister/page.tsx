"use client";
import React from "react";
import * as C from "../../../styles/form";
import { Container } from "@mui/material";

const ConductorRegister = () => {
  return (
    <Container
      sx={{
        margin: "100px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <C.Title>Registrar Condutor</C.Title>
      <C.FormContainer component="form" style={{ gridTemplateColumns: "1fr" }}>
        <C.Input label="Nome" variant="outlined" color="secondary" />
        <C.Input
          label="Número da Habilitação"
          variant="outlined"
          color="secondary"
        />
        <C.Input
          label="Categoria da Habilitação"
          variant="outlined"
          color="secondary"
        />
        <C.Input
          label="Vencimento da Habilitação"
          variant="outlined"
          color="secondary"
        />
      </C.FormContainer>
      <C.ButtonRegister variant="outlined" color="secondary">
        Cadastrar
      </C.ButtonRegister>
    </Container>
  );
};

export default ConductorRegister;
