import { createSlice} from "@reduxjs/toolkit";


const todoslice = createSlice({
    name: 'todos',
    initialState: [
        {id:1, title: "add your task" , completed: false},
    ],
    reducers: {
        // add action
        addtodo: (state, action) => {
            const newtodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newtodo)
        },
        // checkbox action
        togglecomplete : (state, action) => {
            const index = state.findIndex((val) => val.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        // delete action
        tododelete: (state,action) => {
          return   state.filter((val) => val.id !== action.payload.id )
        }
    }
})

export const {addtodo, togglecomplete, tododelete} = todoslice.actions
export default todoslice.reducer