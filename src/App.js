import "./App.css";
import CardListComponent from "./components/CardListComponent";
import HeaderComponent from "./components/HeaderComponent";
import SeacrhComponent from "./SeacrhComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <SeacrhComponent />
      <CardListComponent />
    </div>
  );
}

export default App;
