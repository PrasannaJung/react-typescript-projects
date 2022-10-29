import type { NextPage } from "next";
import { useState } from "react";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";

interface Todo {
  id: number;
  text: string;
}

const Home: NextPage = () => {
  const [items, setItems] = useState<Todo[]>([]);

  const onAddItem = (newTodo: string) => {
    setItems(prev => {
      return [...prev, { id: Math.random(), text: newTodo }];
    });
  };

  const onDeleteTodo = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className='min-h-screen bg-slate-200 pt-24'>
      <div className=' w-2/3 mx-auto'>
        <NewTodo onAdd={onAddItem} />
        <Todos items={items} onDelete={onDeleteTodo} />
      </div>
    </div>
  );
};

export default Home;
