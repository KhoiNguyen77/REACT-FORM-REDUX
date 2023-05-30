import { configureStore } from "@reduxjs/toolkit";
import { students } from "./students";
import { student } from "./student";
import { errors } from "./errors";
import { disabled } from "./disabled";
export const store = configureStore({
    reducer: {
        students: students,
        student: student,
        errors: errors,
        disable: disabled
    }
})