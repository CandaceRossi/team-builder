import React, { useState } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    email: "",
    name: "",
    role: ""
  });
  return (
    <div>
      <form>
        <input />
      </form>
    </div>
  );
}

export default App;
