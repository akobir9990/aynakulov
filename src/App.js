import React from "react";
import "./App.css";
import Appbar from "./components/appbar";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.onkeydown = function (e) {
    // disable F12 key
    if (e.keyCode === 123) {
      return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode === 85) {
      return false;
    }
  };

  return (
    // <div className="bg-repeat bg-[url('./assets/images/bg-repeat.jpeg')] bg-fixed">
    //   <Appbar />
    // </div>
    <div className="bg-[#000] text-[green]">
      SYSTEM IS NOT SAFE
    </div>
  );
}

export default App;
