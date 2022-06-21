import { Card } from "../Styles/Card";
import { GridWrapper, Header, HeaderSort } from "../Styles/ContentList";
import { Package } from "../Types/Package";
import Item from "./Item";

interface ContentListProps {
  items: Package[];
  method: React.MouseEventHandler<HTMLSpanElement>;
}

export default function ContentList({ items, method }: ContentListProps) {
  return (
    <div>
      {items.length > 0 ? (
        <Card>
          <GridWrapper>
            <Header>Name</Header>
            <Header>Owner</Header>
            <HeaderSort onClick={method}>Stars</HeaderSort>
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
