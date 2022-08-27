import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../redux/features/appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
    }
})