import styled from "styled-components";

export const Main = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;