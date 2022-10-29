import React from "react";

interface ItemProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

const SingleItem: React.FC<ItemProps> = props => {
  return (
    <div className='bg-cyan-200 px-4 py-2'>
      <li className='flex justify-between'>
        <span>{props.text}</span>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </li>
    </div>
  );
};

export default SingleItem;
