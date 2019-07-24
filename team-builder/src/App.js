import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TeamMemberCard from "./TeamMemberCard";
import MemberToEdit from "./MemberToEdit";

function App() {

 const memberToEdit = event => {
    setInputValue(event.target.value);
}
  return (
    <div>
      <form>
        <input />
        <input />
        <input />
      </form>
      <MemberToEdit type="text" onChange={} />
    </div>
  );
}

export default App;
