import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import ContentList from "./Components/ContentList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Message from "./Components/Message";
import Sidebar from "./Components/Sidebar";
import { addOwner } from "./Helpers/addOwner";
import { Column, Container, Flex, Main } from "./Styles/App";
import { Card } from "./Styles/Card";
import { Package } from "./Types/Package";
import { Style } from "./Types/Style";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [items, setItems] = useState<Package[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const itemsPerPage = 5;
  const searchURL = `https://libraries.io/api/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_LIBRARIES_KEY}&per_page=${itemsPerPage}`;
  const sortByStarsURL = searchURL + `&sort=stars`;
  const allResultsURL = `https://libraries.io/api/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_LIBRARIES_KEY}&per_page=${itemsPerPage}`;

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
    fetchData(searchURL);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSort = (e: React.MouseEvent) => {
    fetchData(sortByStarsURL);
  };

  useEffect(() => {
    if (searchKeyword !== "") fetchData(searchURL);
  }, []);
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
              <ContentList items={items} method={handleSort} />
              {error ? <Message style={Style.Error} message={message} /> : null}
            </Column>
          </Flex>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
