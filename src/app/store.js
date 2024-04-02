import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './createslice'

export default configureStore({
    reducer : {
        todos: todoreducer
    }
})