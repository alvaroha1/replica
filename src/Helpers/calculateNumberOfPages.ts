export function calculateNumberOfPages(numberOfPages: number, itemsPerPage: number): number {
  if (numberOfPages <= itemsPerPage) {
    return 1;
  } else {
    return Math.ceil(numberOfPages / itemsPerPage);
  }
}