import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Sidebar from "./Components/Sidebar";
import { addOwner } from "./Helpers/addOwner";
import { Card } from "./Styles/Card";
import { Main, Container, Flex, Column } from "./Styles/App";
import { Package } from "./Types/Package";
import { Style } from "./Types/Style";
import ContentList from "./Components/ContentList";
import Message from "./Components/Message";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [items, setItems] = useState<Package[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const itemsPerPage = 5;

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://libraries.io/api/bower-search?q=${searchKeyword}&per_page=${itemsPerPage}`
      );
      const json = await data.json();
      const newItems = addOwner(json);
      setItems(newItems);
    } catch (error) {
      setError(true);
      setMessage("Error fetching data");
      console.error(error);
    }
  };

  const handleButton = () => {
    fetchData();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSort = (e: React.MouseEvent) => {
    console.log("sort")
  };

  useEffect(() => {
    if (searchKeyword !== "") fetchData();
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
                {error ? (
                  <Message style={Style.Error} message={message} />
                ) : null}
            </Column>
          </Flex>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
