import React from "react";

const TeamMemberCard = props => {
  return (
    <div className="user-list">
      <div className="user" key={props.id}>
        <h2>{props.name}</h2>
        <p>{props.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

// import React from "react";
// import Form from "./Form";

// function TeamMemberCard(props) {
//   return (
//     <div className="member-card">
//       <Form key={props.email} member={props.item} />
//     </div>
//   );
// }

// export default TeamMemberCard;
