import {configureStore} from "@reduxjs/toolkit";
import snakeReducer from "./features/snakeSlice";

export default configureStore({
    reducer:{
        snake: snakeReducer
    }
})