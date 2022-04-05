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
  padding: 2rem;
`;

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light[900]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  width: 100%;

  > h2 {
    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  form {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > div + div {
      margin-top: 1rem;
    }

    button + button {
      margin-left: 1rem;
    }

    .buttons {
      align-self: flex-end;

      button {
        transition: all 0.3s ease-in;
      }
      .cancel {
        background-color:${({ theme }) => theme.colors.error.main};

        &:hover {
          background-color: ${({ theme }) => theme.colors.error.dark};
        }
      }

      .edit {
        background-color: ${({ theme }) => theme.colors.success.main};

        &:hover {
          background-color: ${({ theme }) => theme.colors.success.dark};
        }
      }
    }
  }
`;
