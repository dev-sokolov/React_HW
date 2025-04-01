
import MainMenu from "../MainMenu/MainMenu";
import HomePage from "../../pages/HomePage/HomePage";
import Articles from "../../pages/Articles/Articles";
import Article from "../../pages/Article/Article";

import { Routes, Route } from "react-router-dom";

import "../../styles/style.css";

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>    
    </>
  )
}

export default App
