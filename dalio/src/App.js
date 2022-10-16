import React from "react";
import "./App.scss";
import Header from "./components/Hader";
import Promotion from "./components/Promotion";
import WeAre from "./components/WeAre";


function App() {
  return (
    <div className="App">
      <Header/>
      <Promotion/>
      <WeAre/>
    </div>
  );
}

export default App;
