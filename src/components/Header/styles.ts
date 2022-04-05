import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.dark[800]};
  
  position: absolute;
  top: 0;
  left: 0;
  
  img {
    width: 10rem !important;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.light[900]};

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

`