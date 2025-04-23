import { createSlice, nanoid } from '@reduxjs/toolkit'

// Actions
const initialState = {
    todos: [{
        id: 1,
        task: "Demo task",
        isDone: false,
    }]
};

// reducers + actions
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    // are like event handlers
    reducers: {// state(todos), actions
        addTodo: function (state,action) {// in addTodo new todo's will get created
            
            // In your addTodo reducer, you are using action.payload.task because you expect the payload to contain a task property when adding a new todo.
            const newTodo = {
                id: nanoid(), 
                // If the property name in the payload and the object were the same, you could use shorthand syntax
                task: action.payload.task,
                isDone: false, 
            }

            // now we have created new todo now we would like to add it in an existing arrays of todo, to do that
            state.todos.push(newTodo)// direct mutation instead of [...todos, newTodo] 
        },

        // Action Payload: Contains the id of the todo to delete.
        deleteTodo: (state, action)=>{
            // overwrite because todos ia an array of objects
            state.todos = state.todos.filter((todo)=>{
                // Similarly, in your deleteTodo reducer, you are comparing todo.id with action.payload, which means you expect the payload to contain the id of the todo to delete.
               return todo.id != action.payload.id // by this we achive Scalability: If you later decide to include additional properties in the payload (e.g., reason for deletion), the structure remains consistent.
            });// push will add the entire filtered array as a single element
        },

        markAsDone: (state,action) =>{
            const markAsDoneTodo = state.todos.map((todo)=>{
                if (todo.id === action.payload.id) {
                    return { ...todo, isDone: true }; // Return a new object with updated isDone. Avoid Direct Mutation
                }

                return todo; // Return the unchanged todo for non-matching cases
                
            })

            state.todos = markAsDoneTodo;
        },

        editTodo: (state, action) =>{

            // see we are just updating the content or task of the todo to do that

            // to find an individual todo
            const editTodo = state.todos.map((todo)=>{
                if (todo.id === action.payload.id ) {
                    // we will return an object because each todo is an object inside array
                    return {...todo, task: action.payload.task }// keeping the rest things same
                }

                return todo; // Return the unchanged todo for non-matching cases
            })

            state.todos = editTodo;

        }
        
    }// multiple functions
    
})

// Action creators(are functions that create action objects) are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone, editTodo } = TodoSlice.actions

// registers to the Redux store. 
export default TodoSlice.reducer;// individual reducers get imported individually

// https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
