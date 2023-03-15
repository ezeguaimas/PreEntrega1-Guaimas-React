import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ borderRadius: "10px" }} >
        <Navbar />
      </header>

      <div>
        <ItemListContainer propsSaludo="Bienvenid@s a mi eShop!" />
      </div>
    </div>
  );
}

export default App;
