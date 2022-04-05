import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  label {
    margin-bottom: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.error.main};
  }
`;
