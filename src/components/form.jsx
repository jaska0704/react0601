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
    <form className=" flex justify-center gap-4" onSubmit={submit}>
      <div>
        <input
          className=" border-2 border-gray-500 px-9 py-2 rounded-xl"
          onChange={changeInput}
          value={input.name}
          name="name"
          type="text"
        />
      </div>
      <div>
        <input
          className=" border-2 border-gray-500 px-9 py-2 rounded-xl"
          onChange={changeInput}
          value={input.email}
          type="email"
          name="email"
          id=""
        />
      </div>
      <button className=" px-7 py-2 bg-green-400 rounded-xl">send</button>
    </form>
  );
};
