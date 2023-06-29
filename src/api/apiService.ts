import { InterfaceSignUpClient, InterfaceSignInClient } from "@/types/client";
import api from "./axiosConfig";

export const signUpClient = async ({
  numeroDocumento,
  tipoDocumento,
  nome,
  logradouro,
  numero,
  bairro,
  cidade,
  uf,
}: InterfaceSignUpClient) => {
  const response = await api.post("/Cliente", {
    nome,
    numeroDocumento,
    tipoDocumento,
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
  });
  return response;
};

export const signInClient = async ({
  nome,
  numeroDocumento,
}: InterfaceSignInClient) => {
  const response = await api.post("/Cliente", {
    nome,
    numeroDocumento,
  });
  return response;
};
