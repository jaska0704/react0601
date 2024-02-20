import React from "react";
const url = "http://localhost:3000/todoList";
import axios from "axios";

export const Card = ({ name, email, id, getData }) => {
  const deletItem = async () => {
    try {
      const res = await fetch(`${url}/${id}`, { method: "DELETE", });
      const data = await res.json();
    } catch (error) {
        console.log(error);
    }finally{
        getData();
    }
  };

  const editItem = () => {
    let newName = prompt("", name);
    let newEmail = prompt("", email);

     fetch(`${url}/${id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ name: newName, email: newEmail }),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
       })
       .finally(() => {
         getData();
       });
  };
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <button onClick={deletItem}>delete</button>
      <button onClick={editItem}>edit</button>
    </div>
  );
};
