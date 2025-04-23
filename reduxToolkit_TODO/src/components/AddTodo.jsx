import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
import { ToastContainer, toast, Bounce } from "react-toastify";

export const AddTodo = () => {

  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) =>{
    e.preventDefault();

    if(input.trim() === '') return; // check if input is empty

    // dispatch > reducers > store

    // addTodo reducer, the payload is expected to have a property named task. This is why you are dispatching the action with the payload structured as { task: input }.
    dispatch(addTodo({ task: input })); // dispatching the action to add todo
    // whenever input getting accepted its getting added to task array

    setInput(''); // clear the input field after adding todo

    toast.success("The Todo is listed successfully", {
      // This means the toast message appears every time the form submission is successful.
      position: "bottom-right",
      autoClose: 3004,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "font-[EthnocentricI]",
      style: {
        color: "green",
        fontSize: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
      },
      transition: Bounce,
    });
    
  }

  return (
    <>

    <form onSubmit={addTodoHandler} style={{fontFamily: 'Ethnocentric' , fontSize: '2vw',}} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>

    <ToastContainer></ToastContainer>

    </>

  )
}
