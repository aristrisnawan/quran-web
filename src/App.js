import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardListComponent from "./components/CardListComponent";
import DetailSurah from "./components/DetailSurah";
import HeaderComponent from "./components/HeaderComponent";
import Layout from "./Layout/Layout";
import SeacrhComponent from "./SeacrhComponent";

function App() {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    axios.get("https://api.quran.sutanlab.id/surah").then((response) => {
      const listSurah = response.data.data;
      // console.log(listSurah);
      setSurah(listSurah);
    });
  }, []);

  // console.log(surah);

  return (
    <div className=" scroll-smooth">
      <Layout>
        {/* <CardListComponent listsurah={surah} /> */}
        <Routes>
          <Route path="/" element={<CardListComponent listsurah={surah} />} />
          <Route path="/detail/:id" element={<DetailSurah />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
