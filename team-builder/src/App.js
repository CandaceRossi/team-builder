import React, {useState} from "react";


function App() {
  const [users, setUsers] = useState([{}])
return(
  <div className="App">
  <h1>My Form</h1>
  <Form userList={users}/>
  
  </div>
)





















// import React, { useState } from "react";
// import "./App.css";
// import TeamMemberCard from "./TeamMemberCard";
// import Form from "./Form";

// function App(props) {
//   const [Team, setTeam] = useState(true);

//   // const handleChange = event => {
//   //   setTeam(event.target.value);
//   // };
//   return (
//     <div className="App-header">
//       <h1>Team Members</h1>
//       <div className="App-link">
//         <TeamMemberCard key={Team.id} team={Team} />
//       </div>
//       <Form />
//     </div>
//   );
// }

// export default App;
