import React, {useState} from "react";
import "./App.css";
import TeamMemberCard from "./TeamMemberCard";
import {teamMember} from Form;


function App(props) {

const [Team, setTeam] = useState(props.teamMember)

 const memberToEdit = event => {
    setTeam(event.target.value);
}
  return (
    <div>
    <h1>Team Members</h1>
    <div>
    {teamMember.map((member) => {
      <TeamMemberCard key={props.name} />
    })}
    </div>
    <Form submit={submit} />
    </div>
  );
}

export default App;
