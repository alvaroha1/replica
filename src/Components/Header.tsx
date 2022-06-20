import React from 'react'
import { Headers, List, ListBox, ListElement, Main } from '../Styles/Header'

export default function Header() {
  const elements = ["Docs", "Search Packages", "Blog", "Stats"]
  const title = "Bower Search Alternative"
  const subtitle = "Powered by libraries.io"
  return (
    <Main>
      <ListBox>
        <List>
          {elements.map(element => <ListElement>{element}</ListElement>)}
        </List>
      </ListBox>
      <Headers>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Headers>
    </Main>
  )
}
