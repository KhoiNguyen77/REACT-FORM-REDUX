const initialState = {
    key: "*",
    name: "*",
    phoneNumber: "*",
    email: "*"
}

export const errors = (state = initialState, { type, payload }) => {
    switch (type) {

        case "HANDLE_ERROR":
            return { ...state, ...payload }

        default:
            return state
    }
}
