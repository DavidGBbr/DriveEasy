"use client";
import React, { useState, ChangeEvent } from "react";
import * as C from "../../../styles/form";
import { Container } from "@mui/material";
import { InterfaceSignUpClient } from "@/types/client";
import { signUpClient } from "@/api/apiService";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: keyof InterfaceSignUpClient;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  name,
}) => (
  <C.Input
    label={label}
    variant="outlined"
    color="secondary"
    value={value}
    onChange={onChange}
    name={name}
  />
);

const ClientRegister: React.FC = () => {
  const [formValues, setFormValues] = useState<InterfaceSignUpClient>({
    nome: "",
    numeroDocumento: "",
    tipoDocumento: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const {
      nome,
      numeroDocumento,
      tipoDocumento,
      logradouro,
      numero,
      bairro,
      cidade,
      uf,
    } = formValues;

    if (
      nome &&
      numeroDocumento &&
      tipoDocumento &&
      logradouro &&
      numero &&
      bairro &&
      cidade &&
      uf
    ) {
      const data = { ...formValues };
      const response = await signUpClient(data);
      if (response.status === 200) {
        alert("Usuário criado com sucesso!");
        setFormValues({
          nome: "",
          numeroDocumento: "",
          tipoDocumento: "",
          logradouro: "",
          numero: "",
          bairro: "",
          cidade: "",
          uf: "",
        });
      }
    } else {
      alert("Preencha todos os campos antes de enviar o formulário.");
      setFormValues({
        nome: "",
        numeroDocumento: "",
        tipoDocumento: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
      });
    }
  };

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
        <InputField
          label="Nome"
          value={formValues.nome}
          onChange={handleInputChange}
          name="nome"
        />
        <InputField
          label="Número do documento"
          value={formValues.numeroDocumento}
          onChange={handleInputChange}
          name="numeroDocumento"
        />
        <InputField
          label="Tipo do documento"
          value={formValues.tipoDocumento}
          onChange={handleInputChange}
          name="tipoDocumento"
        />
        <InputField
          label="Logradouro"
          value={formValues.logradouro}
          onChange={handleInputChange}
          name="logradouro"
        />
        <InputField
          label="Número"
          value={formValues.numero}
          onChange={handleInputChange}
          name="numero"
        />
        <InputField
          label="Bairro"
          value={formValues.bairro}
          onChange={handleInputChange}
          name="bairro"
        />
        <InputField
          label="Cidade"
          value={formValues.cidade}
          onChange={handleInputChange}
          name="cidade"
        />
        <InputField
          label="UF"
          value={formValues.uf}
          onChange={handleInputChange}
          name="uf"
        />
      </C.FormContainer>
      <C.ButtonRegister
        variant="outlined"
        color="secondary"
        onClick={handleRegister}
      >
        Cadastrar
      </C.ButtonRegister>
    </Container>
  );
};

export default ClientRegister;
