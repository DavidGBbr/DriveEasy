"use client";
import React, { useState, ChangeEvent } from "react";
import * as C from "../../../styles/form";
import { Container } from "@mui/material";
import { InterfaceSignUpDriver } from "@/types/driver";
import { signUpDriver } from "@/api/apiService";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: keyof InterfaceSignUpDriver;
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

const ConductorRegister = () => {
  const [formValues, setFormValues] = useState<InterfaceSignUpDriver>({
    nome: "",
    numeroHabilitacao: "",
    categoriaHabilitacao: "",
    vencimentoHabilitacao: "",
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
      numeroHabilitacao,
      categoriaHabilitacao,
      vencimentoHabilitacao,
    } = formValues;

    if (
      nome &&
      numeroHabilitacao &&
      categoriaHabilitacao &&
      vencimentoHabilitacao
    ) {
      const formattedDate = formatDateString(vencimentoHabilitacao);
      const data = {
        ...formValues,
        vencimentoHabilitacao: formattedDate,
      };
      const response = await signUpDriver(data);
      if (response.status === 200) {
        alert("Motorista cadastrado com sucesso!");
        setFormValues({
          nome: "",
          numeroHabilitacao: "",
          categoriaHabilitacao: "",
          vencimentoHabilitacao: "",
        });
      }
    } else {
      alert("Preencha todos os campos antes de enviar o formulário.");
      setFormValues({
        nome: "",
        numeroHabilitacao: "",
        categoriaHabilitacao: "",
        vencimentoHabilitacao: "",
      });
    }
  };

  function formatDateString(dateString: string) {
    const [day, month, year] = dateString.split("/");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

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
        <InputField
          label="Nome"
          value={formValues.nome}
          onChange={handleInputChange}
          name="nome"
        />
        <InputField
          label="Número da Habilitação"
          value={formValues.numeroHabilitacao}
          onChange={handleInputChange}
          name="numeroHabilitacao"
        />
        <InputField
          label="Categoria da Habilitação"
          value={formValues.categoriaHabilitacao}
          onChange={handleInputChange}
          name="categoriaHabilitacao"
        />
        <InputField
          label="Vencimento da Habilitação(dd/mm/aaaa)"
          value={formValues.vencimentoHabilitacao}
          onChange={handleInputChange}
          name="vencimentoHabilitacao"
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

export default ConductorRegister;
