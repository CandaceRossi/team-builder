import React from "react";
import {Form} from './Form'


function memberToEdit(props) => {
    const handleSubmit = event => {
        event.preventDefault();
    }
return(
    <div>
    <form onSubmit={event => handleSubmit(event)}> 
    <label>
        Name:
        <input type="text" onChange={event => handleChange(event)}/>
    </label>
    <label>
        Email:
        <input type="text" onChange={event => handleChange(event)}/>
    </label>
    <label>
        Role:
        <input type="text" onChange={event => handleChange(event)}/>
    </label>
    <button>Edit</button>
    </form>
    </div>
    );
    }

export default MemberToEdit;