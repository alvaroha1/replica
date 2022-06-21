import { Card } from "../Styles/Card";
import { Package } from "../Types/Package";
import PaginationArrow from "./PaginationArrow";

interface PaginationProps {
  item?: Package;
  handlePageToDisplay: (page: number) => void;
  numberOfPages: number;
  pageToDisplay: number;
}

export default function Item({ handlePageToDisplay, pageToDisplay, numberOfPages }: PaginationProps) {
  return (
    <Card>
        <PaginationArrow
        direction="left"
        disabled={pageToDisplay === 1}
        method={() => handlePageToDisplay(pageToDisplay - 1)}
      />
      <PaginationArrow
        direction="right"
        method={() => handlePageToDisplay(pageToDisplay + 1)}
        disabled={pageToDisplay === numberOfPages}
      />
    </Card>
  );
}
