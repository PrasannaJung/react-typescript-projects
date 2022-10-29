import type { NextPage } from "next";
import { useState } from "react";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";

const list = [
  {
    id: 1,
    text: "Hello World",
  },
  {
    id: 2,
    text: "Bye World",
  },
];

const Home: NextPage = () => {
  const [items, setItems] = useState();

  const onAddItem = (newTodo: string) => {
    console.log(newTodo);
  };

  return (
    <div className='min-h-screen bg-slate-200 pt-24'>
      <div className=' w-2/3 mx-auto'>
        <NewTodo onAdd={onAddItem} />
        <Todos items={list} />
      </div>
    </div>
  );
};

export default Home;
