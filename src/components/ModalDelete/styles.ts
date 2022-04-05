import styled from "styled-components";

export const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light[900]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .buttons {
    align-self: flex-end;

    button + button {
      margin-left: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.colors.light[900]};
      border: none;
      border-radius: 0.25rem;
      transition: background-color 0.2s ease-in;
    }
    
    .cancel {
      background-color: ${({ theme }) => theme.colors.dark[800]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.dark[700]};
      }
    }

    .delete {
      background-color: ${({ theme }) => theme.colors.error.main};

      &:hover {
        background-color: ${({ theme }) => theme.colors.error.dark};
      }
    }
  }
`;
