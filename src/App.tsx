import React, { useState } from "react";
import Button from "./Components/Button";
import ContentList from "./Components/ContentList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Message from "./Components/Message";
import Sidebar from "./Components/Sidebar";
import Pagination from "./Components/Pagination";
import { addOwner } from "./Helpers/addOwner";
import { calculateNumberOfPages } from "./Helpers/calculateNumberOfPages";
import { Column, Container, Flex, Main } from "./Styles/App";
import { Card } from "./Styles/Card";
import { Package } from "./Types/Package";
import { Style } from "./Types/Style";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [items, setItems] = useState<Package[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [pageToDisplay, setPageToDisplay] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const itemsPerPage = 5;
  const searchURL = `https://libraries.io/api/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_LIBRARIES_KEY}&page=${pageToDisplay}&per_page=${itemsPerPage}`;
  const searchAllURL = `https://libraries.io/api/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_LIBRARIES_KEY}&per_page=100`;
  const fetchData = async (url: string) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      const newItems = addOwner(json);
      setItems(newItems);
    } catch (error) {
      setError(true);
      setMessage("Error fetching data");
      console.error(error);
      setTimeout(() => setError(false), 5000);
    }
  };

  const handleButton = () => {
    setPageToDisplay(1);
    fetchData(searchURL)
    fetchAll(searchAllURL);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSort = (sortItem: string) => {
    const sortByStarsURL = searchURL + `&sort=${sortItem}`;
    fetchData(sortByStarsURL);
  };

  const handlePageToDisplay = (index: number) => {
    const paginationURL = `https://libraries.io/api/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_LIBRARIES_KEY}&page=${index}&per_page=${itemsPerPage}`;
    setPageToDisplay(index);
    console.log("display page", pageToDisplay)
    fetchData(paginationURL);
  };

  const fetchAll = async(url: string) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      const pages = calculateNumberOfPages(json.length, itemsPerPage);
      console.log("number of pages", pages, json.length)
      setNumberOfPages(pages);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <Flex>
            <Sidebar />
            <Column>
              <Card>
                <InputField
                  placeholder="Type here ..."
                  handleInput={handleInput}
                  onKeyDown={handleButton}
                />
                <Button
                  name="Search"
                  onClick={handleButton}
                  disabled={searchKeyword === ""}
                  dataTestId="search"
                />
              </Card>
              <ContentList items={items} handleSort={handleSort} />
              {error ? <Message style={Style.Error} message={message} /> : null}
              {items.length > 0 ? <Pagination numberOfPages={numberOfPages} handlePageToDisplay={handlePageToDisplay} pageToDisplay={pageToDisplay} /> : null}
            </Column>
          </Flex>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
