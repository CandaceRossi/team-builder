import React from "react";

const handleChange = event => {
  console.log(handleChange);
};
const Form = props => {
  return (
    <div className="user-list">
      <form>
        <label htmlFor="name" />
        User Name Name: {props.name}
        <input type="text" name="name" placeholder="name" value={props.name} />
        <textarea>hello</textarea>
        onChange={event => handleChange(event)}
      </form>
      <form>
        <label htmlFor="email" />
        User Email Email: {props.email}
        <input type="email" placeholder="email" />
        <textarea>hey</textarea>
        onChange={event => handleChange(event)}
      </form>
      <form>
        <label htmlFor="role" />
        Role: {props.role}
        <input type="text" placeholder="role" />
        onChange={event => handleChange(event)}
      </form>
      <button>Edit</button>
    </div>
  );
};

export default Form;
// import React from "react";

// const handleSubmit = event => {
//   event.preventDefault();
//   console.log("submit is subpar", handleSubmit);
// };
// const handleChange = event => {
//   console.log("event is real", handleChange);
// };

// function Form(event) {
//   return (
//     <div>
//       <form onSubmit={event => handleSubmit(event)}>
//         <label>
//           Name:
//           <input
//             type="text"
//             placeholder="Name"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Role:
//           <input
//             type="text"
//             placeholder="Role"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <button>Edit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;
