import { Main, List, ListElement } from "../Styles/Sidebar";

export default function Sidebar() {
  const elements = [
    "Home",
    "Creating Packages",
    "API",
    "Configuration",
    "Pluggable Resolvers",
    "Tools",
    "About",
  ];
  return (
    <Main>
      <List>
        {elements.map((element) => (
          <ListElement key={element}>{element}</ListElement>
        ))}
      </List>
    </Main>
  );
}
