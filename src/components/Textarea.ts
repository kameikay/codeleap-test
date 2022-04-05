import styled, { css } from "styled-components";

interface ITextareaProps {
  error: boolean;
}

export const Textarea = styled.textarea<ITextareaProps>`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.dark[900]};
  border-radius: 0.5rem;
  resize: none;
  outline: none;
  transition: all 0.3s ease-in;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[300]};
  }

  ${({ theme, error }) => error && css`
    border: 1px solid ${theme.colors.error.main} !important;
  `}
`;
