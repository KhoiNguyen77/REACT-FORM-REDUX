const initialState = true

export const disabled = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_DISABLE": {
            let disabled = false;
            state = disabled
        }
    }
    return state
}

