import React, { useState } from "react";

const Form = props => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    role: "",
    body: ""
  });
  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(handleSubmit);
    let newForm = {
      ...userInfo,
      id: Date.now()
    };
    props.addNewForm(newForm);
    setUserInfo({ name: "", email: "", role: "", body: "" });
  };
  return (
    <div className="user-list">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="email" />
        Email:
        <input
          type="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="role" />
        Role:
        <input
          type="text"
          placeholder="role"
          value={userInfo.role}
          onChange={handleChange}
        />
        <label htmlFor="body" />
        <textarea
          name="body"
          placeholder="Type your note here"
          value={userInfo.body}
          onChange={handleChange}
        >
          hey
        </textarea>
      </form>
      <button type="submit">Edit</button>
    </div>
  );
};

export default Form;
