const initialState = {
    loggedIn: false,
    role: ''
}

export const login = (state=initialState,action) => {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state,
                loggedIn: action.loggedIn,
                role: action.role
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                ...initialState
            }
        }
        default:
            return state;
    }
}

