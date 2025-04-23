import React from 'react'
import { AddTodo } from './AddTodo'
import { EditTodo } from './EditTodo'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, markAsDone } from '../features/todo/todoSlice'

const Todo = () => {

  const todos = useSelector((state) => {
    return state.todos;
  })

  const dispatch = useDispatch();

  return (
    <div className='todo flex flex-col items-center align-middle justify-center' >
      <h2 className='' style={{ borderBottom: '2px solid black', borderRadius: '2px', borderColor: "blue", fontFamily: 'Ethnocentric', fontSize: '2vw', }}>Todo</h2>
      <AddTodo />
      {/* <EditTodo/> */}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div
              style={{ fontFamily: 'Ethnocentric' }}
              className="text-white mr-6 flex-1"
            >
              {todo.task}
            </div>

            {/* Buttons in a row with gap */}
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                className="text-white bg-red-500 border-0 p-2 focus:outline-none hover:bg-red-600 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                onClick={() => { }}
                className="text-white bg-green-500 border-0 p-2 focus:outline-none hover:bg-green-600 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.1 2.1 0 013.03 2.91l-9.083 9.083a4.5 4.5 0 01-1.897 1.13l-2.678.8.8-2.678a4.5 4.5 0 011.13-1.897l9.083-9.083zm0 0L13.5 6.75"
                  />
                </svg>
              </button>
            </div>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default Todo
