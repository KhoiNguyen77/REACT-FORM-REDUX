const initialState = {
    key: "*",
    name: "*",
    phoneNumber: "*",
    email: "*"
}

export const errors = (state = initialState, { type, payload }) => {
    return state
}
