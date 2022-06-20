import { Package } from "../Types/Package";
import Item from "./Item";
import { Card } from "../Styles/Card";
import { GridWrapper, Header } from "../Styles/ContentList";

interface ContentListProps {
  items: Package[];
}

export default function ContentList({ items }: ContentListProps) {
  return (
    <div>
      {items.length > 0 ? (
        <Card>
          <GridWrapper>
            <Header>Name</Header>
            <Header>Owner</Header>
            <Header>Stars</Header>
          </GridWrapper>
        </Card>
      ) : null}
      {
        items.length > 0
          ? items.map((item, index) => <Item key={index} item={item} />)
          : null // add message handling
      }
    </div>
  );
}
