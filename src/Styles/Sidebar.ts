import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style-type: none;
  padding: 0px 20px;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ListElement = styled.li`
  padding: 12px 0px;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;