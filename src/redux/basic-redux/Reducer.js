const initialState = {
    username: "John",
    toggle: false
}

export const reduxReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, username: action.payload.username }
        case "TOGGLE":
            return { ...state, toggle: action.payload.toggle }

        default:
            return state

    }

}