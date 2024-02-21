import React from "react";
import requist from "./requist";

export const Card = ({ name, email, id, getData }) => {
  const deletItem = async () => {
    try {
      const res = await requist.delete(`todoList/${id}`);
      const data = await res.data;
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };

  const editItem = () => {
    let newName = prompt("", name);
    let newEmail = prompt("", email);

    requist.put(`todoList/${id}`, {name:newName, email:newEmail})
      .then((res) => res.data)
      .finally(() => {
        getData();
      });
  };
  return (
    <div className=" bg-teal-200 p-6 rounded-2xl mt-5">
      <h1 className=" px-12 bg-teal-800 text-white rounded-2xl py-2">{name}</h1>
      <p className=" px-12 bg-red-500 my-4 text-white rounded-2xl py-2">
        {email}
      </p>
      <div className=" flex gap-4">
        <button
          className=" px-7 py-2 bg-orange-400 rounded-xl"
          onClick={deletItem}
        >
          delete
        </button>
        <button
          className=" px-7 py-2 bg-blue-400 rounded-xl"
          onClick={editItem}
        >
          edit
        </button>
      </div>
    </div>
  );
};
