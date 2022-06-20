import { Card } from "../Styles/Card";
import { GridWrapper } from "../Styles/ContentList";
import { Package } from "../Types/Package";

interface ItemProps {
  item: Package;
}

export default function Item({ item }: ItemProps) {
  return (
    <Card>
      <GridWrapper>
      <span> {item.name}</span>
      <span>{item.owner}</span>
        <span> {item.stars}</span>
        </GridWrapper>
    </Card>
  );
}
