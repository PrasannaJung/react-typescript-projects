import React, { useRef, useState } from "react";

interface NewTodoProps {
  onAdd: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAdd(enteredText);
  };

  return (
    <form className='mb-6 text-center' onSubmit={submitFormHandler}>
      <input
        ref={inputRef}
        type='text'
        className='bg-gray-300 shadow-inner px-3 py-1 border-none rounded-sm mr-2 outline-none'
      />
      <button className='bg-blue-500 text-white px-3 py-1'>Add</button>
    </form>
  );
};

export default NewTodo;
