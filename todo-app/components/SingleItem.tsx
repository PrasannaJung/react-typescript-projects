import React from "react";

interface ItemProps {
  id: number;
  text: string;
}

const SingleItem: React.FC<ItemProps> = props => {
  return (
    <div className='bg-cyan-200 px-4 py-2'>
      <li>{props.text}</li>
    </div>
  );
};

export default SingleItem;
