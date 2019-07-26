import React from "react";

const handleSubmit = event => {
  event.preventDefault();
  console.log("submit is subpar", handleSubmit);
};
const handleChange = event => {
  console.log("event is real", handleChange);
};

function Form(event) {
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            placeholder="Role"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Edit</button>
      </form>
    </div>
  );
}

export default Form;
