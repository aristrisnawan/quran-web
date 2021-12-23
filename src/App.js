import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardListComponent from "./components/CardListComponent";
import HeaderComponent from "./components/HeaderComponent";
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
    <div>
      <HeaderComponent />
      <SeacrhComponent />
      <CardListComponent listsurah={surah} />
    </div>
  );
}

export default App;
