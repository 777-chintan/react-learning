import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
