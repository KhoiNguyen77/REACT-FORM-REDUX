const initialStudent = {
    key: "",
    name: "",
    phoneNumber: "",
    email: ''
}

export const student = (state = initialStudent, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE": {
            const { id, value } = action.payload
            let newState = { ...state };
            newState[id] = value;
            state = newState
        }
        case "HANDLE_RESET": {
            let newState = {...initialStudent};
            state = newState
        }
    }
    return state
} 