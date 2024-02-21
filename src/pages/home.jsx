import React from "react";
import { Card } from "../components/card";
import { Form } from "../components/form";
import requist from "../components/requist";
const url = "http://localhost:3000/todoList";

export const Home = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    requist
      .get("/todoList")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" max-w-[1200px] mx-auto">
      <Form getData={getData} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {data?.map((obj) => (
            <Card getData={getData} key={obj.id} {...obj} />
          ))}
        </>
      )}
    </div>
  );
};
