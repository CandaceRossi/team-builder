import React from "react";

const TeamMemberCard = props => {
  return (
    <div className="user-list">
      {props.userList.map(user => {
        return (
          <div className="user" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </div>
        );
      })}
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
