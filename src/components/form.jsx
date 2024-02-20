import React from "react";
const url = "http://localhost:3000/todoList";



export const Form = ({ getData }) => {
  const [input, setInput] = React.useState({ name: "", email: "" });
  const changeInput = (e) => {
    setInput((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        setInput({ name: "", email: "" });
        getData();
      });
  };

  return (
    <form onSubmit={submit}>
      <div>
        <input
          onChange={changeInput}
          value={input.name}
          name="name"
          type="text"
        />
      </div>
      <div>
        <input
          onChange={changeInput}
          value={input.email}
          type="email"
          name="email"
          id=""
        />
      </div>
      <button>send</button>
    </form>
  );
};
