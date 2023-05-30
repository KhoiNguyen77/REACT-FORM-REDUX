const initialState = {
    key: "*",
    name: "*",
    phoneNumber: "*",
    email: "*"
}

export const errors = (state = initialState, action) => {
    switch(action.type) {
        case "HANDLE_ERROR": {
            let errors = {...state};
            errors[action.payload.id] =  action.payload.message;
            state = errors
        }
    }
    return state
}
