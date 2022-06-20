import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  text-align: center;
  & > span {
    padding: 8px 4px;
  }


`;

export const Header = styled.span`
  font-weight: 700;
`;




