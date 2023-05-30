const initialStudent = []

export const students = (state = initialStudent , action) => {
    switch (action.type) {
        case "HANDLE_SUBMIT": {
            let students = [...state];
            students.push(action.payload);
            state = students
        }; break;
        // case "HANDLE_DELETE": {
        //     let students = [...state];
        //     let indexDelete = students.findIndex(student => student.key === action.payload);
        //     students.splice(indexDelete,1);
        //     state = students
        // }; break;
    }
    return state
}