import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.dark[800]};
`;

export const SignupContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.light[800]};
  padding: 2rem;
  border-radius: 0.5rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 1.5rem;

    > span {
      color: ${({ theme }) => theme.colors.primary.main};
      background: ${({ theme }) => theme.colors.primary.linearGradient};

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

    }
  }
`;
