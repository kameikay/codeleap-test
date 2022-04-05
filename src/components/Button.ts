import styled, { css } from "styled-components";

interface IButtonProps {
  isSelected?: boolean;
}

export const Button = styled.button<IButtonProps>`
  align-self: flex-end;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  color: ${({ theme }) => theme.colors.light[900]};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: .5rem;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark[700]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.dark[400]};
    cursor: not-allowed;
  }

  ${({ theme, isSelected}) => isSelected && css`
    background-color: ${theme.colors.dark[700]};
    cursor: inherit;
  `}
`;
