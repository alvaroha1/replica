import { Card } from "../Styles/Card";
import { Number, HideDivMobile } from "../Styles/Pagination";
import { Package } from "../Types/Package";
import PaginationArrow from "./PaginationArrow";

interface PaginationProps {
  item?: Package;
  handlePageToDisplay: (page: number) => void;
  numberOfPages: number;
  pageToDisplay: number;
}

export default function Item({
  handlePageToDisplay,
  pageToDisplay,
  numberOfPages,
}: PaginationProps) {
  const arrayPages = [];
  console.log(numberOfPages);
  if (numberOfPages > 5) {
    for (let i = 0; i < numberOfPages; i++) {
      arrayPages.push(i);
    }
  }

  return (
    <Card>
      <PaginationArrow
        direction="left"
        disabled={pageToDisplay === 1}
        method={() => handlePageToDisplay(pageToDisplay - 1)}
      />
      <HideDivMobile>
        {arrayPages.map((el) => (
          <Number
            selected={el + 1 === pageToDisplay}
            key={el}
            onClick={() => handlePageToDisplay(el + 1)}
          >
            {el + 1}
          </Number>
        ))}
      </HideDivMobile>
      <PaginationArrow
        direction="right"
        method={() => handlePageToDisplay(pageToDisplay + 1)}
        disabled={pageToDisplay === numberOfPages}
      />
    </Card>
  );
}
