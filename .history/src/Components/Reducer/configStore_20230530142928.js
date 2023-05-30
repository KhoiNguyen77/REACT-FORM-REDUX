import { configureStore } from "@reduxjs/toolkit";
import { students } from "./students";
import { student } from "./student";
export const store = configureStore({
    reducer: {
        students: students,
        student: student
    }
})