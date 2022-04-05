import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.dark[900]};
  border-radius: 0.5rem;
  margin-bottom: 2rem;

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
  }
`;
