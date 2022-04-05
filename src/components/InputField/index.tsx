import React from "react";
import { Container } from "./styles";

interface IInputFieldProps {
  children: React.ReactNode;
  label: string;
  error?: string;
}

export function InputField({ children, label, error }: IInputFieldProps) {
  return (
    <Container>
      <label>{label}</label>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
