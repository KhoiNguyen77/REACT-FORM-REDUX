const initialStudent = []

export const students = (state = initialStudent , action) => {
    switch (action.type) {
        case "HANDLE_SUBMIT": {
            let students = [...state];
            students.push(action.payload);
            state = students
        }; break;
    }
    return state
}