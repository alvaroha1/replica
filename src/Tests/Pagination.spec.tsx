import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "../Components/Pagination";

// Based in the example from the video
describe("test Pagination component", () => {
  test("First and Last button work as expected", async () => {
    // Arrange
    const numberOfPages = 10;
    const pageToDisplay = 3;
    const handlePageToDisplay = jest.fn();
    render(
      <Pagination
        handlePageToDisplay={handlePageToDisplay}
        numberOfPages={numberOfPages}
        pageToDisplay={pageToDisplay}
      />
    );

    // Act
    fireEvent.click(screen.getByTestId("btn-minus-one"));

    // Assert
    expect(handlePageToDisplay).toBeCalledTimes(1);
    expect(handlePageToDisplay).toHaveBeenCalledWith(2);

    // Act
    fireEvent.click(screen.getByTestId("btn-plus-one"));

    // Assert
    expect(handlePageToDisplay).toBeCalledTimes(2);
    expect(handlePageToDisplay).toHaveBeenCalledWith(2);
  });
});
