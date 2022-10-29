import React from "react";
import SingleItem from "./SingleItem";

type ListItem = {
  id: number;
  text: string;
};

interface TodosProps {
  items: ListItem[];
  onDelete: (id: number) => void;
}

const Todos: React.FC<TodosProps> = props => {
  return (
    <div className=' bg-gray-100 shadow-2xl px-6 py-4 '>
      <ul className='flex flex-col gap-2'>
        {props.items.map(item => {
          return (
            <SingleItem
              onDelete={props.onDelete}
              key={item.id}
              id={item.id}
              text={item.text}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
