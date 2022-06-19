import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  box-shadow: 0px 2px 4px rgba(0,0,0,.1);
  transition: box-shadow .15s ease;
  margin: 14px 0px;
  display: flex;
`

export const Image = styled.img`
  height: 160px;
`

export const TextBox = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const Text = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  margin: 10px;
`
export const TextBold = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  margin: 10px;
  font-weight: 900;
`
