import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import ContentList from "./Components/ContentList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Sidebar from "./Components/Sidebar";
import { Card } from "./Styles/Card";
import { Main } from "./Styles/Main";

interface Item {
  name: string;
}

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [pageToDisplay, setPageToDisplay] = useState<number>(1);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://libraries.io/api/bower-search?q=${searchKeyword}&page=${pageToDisplay}&per_page=${5}`
      );
      const json = await data.json();
      console.log(json);
      setItems(json);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const handleButton = () => {
    fetchData();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (searchKeyword !== "") fetchData();
  }, [searchKeyword]);
  return (
    <Main>
      <div>
        <Header />
        <div>
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
          <ContentList />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </Main>
  );
}
