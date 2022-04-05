import styled, { css } from "styled-components";

interface IInputSignupProps {
  error: boolean;
}

export const Input = styled.input<IInputSignupProps>`
  border-radius: 0.25rem;
  height: 2rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.dark[800]};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[300]};
  }

  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.error.main};

      &:focus {
        border: 1px solid ${theme.colors.error.main};
      }
    `}
`;
