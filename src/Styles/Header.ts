import styled from "styled-components";

export const Main = styled.header`
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  background-color: #fafafa;
  color: #000;
  border-bottom: 1px solid #eaeaea;
  height: 60px;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;


export const Headers = styled.div`
  font-size: 60%;
  padding: 0px 20px;
  h1, h2 {
    margin: 6px 20px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  list-style-type: none;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    padding: 0px;
  }
`;

export const ListElement = styled.li`
  padding: 0px 12px;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;