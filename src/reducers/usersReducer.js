const usersReducer = (state = [], action) => {
    // payload is jsonPlaceholder API data for a particular user
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]
        default:
            return state
    }
}

export default usersReducer
