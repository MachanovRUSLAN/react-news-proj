import { useState } from "react";
import Navbar from "./components/Navba";
import NewsBoard from "./components/NewsBoard";
import NewsItem from "./components/NewsItem";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <NewsItem />
    </>
  );
}

export default App;
