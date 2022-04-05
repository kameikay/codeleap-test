import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.dark[900]};
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export const PostHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark[900]};
  color: ${({ theme }) => theme.colors.light[900]};
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
  }

  .actions {
    button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.light[900]};
      border: none;
      padding: 0.25rem;
      transition: all 0.3s ease-in;
    }

    button + button {
      margin-left: 2rem;
    }

    .delete {
      &:hover {
        color: ${({ theme }) => theme.colors.error.light};
      }
    }

    .edit {
      &:hover {
        color: ${({ theme }) => theme.colors.success.light};
      }
    }
  }
`;

export const PostContentContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
`;

export const PostData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.dark[500]};
`;

export const PostContent = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  p {
    width: 100%;
    text-align: justify;
  }
`;  
