import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from "lodash";

// async action creator possible due to React-Thunk
export const fetchPosts = () => async dispatch => {
    const {data} = await jsonPlaceholder.get('/posts')
    // manually dispatch
    dispatch({
        type: 'FETCH_POSTS',
        payload: data
    })
}

// Action creator which returns a fn rather than an object
// export const fetchUser = (id) => {
//     // Redux-Thunk will automatically call/invoke this return fn
//     return async (dispatch) => {
//         const {data} = await jsonPlaceholder.get(`/users/${id}`)
//         // manually dispatch
//         dispatch({
//             type: 'FETCH_USER',
//             payload: data
//         })
//     }
// }

// export const fetchUser = (id) => {
//     // Redux-Thunk will automatically call/invoke this return fn
//     return (dispatch) => {
//         _fetchUser(id, dispatch)
//     }
// }

// compact version of the above fn
export const fetchUser = id => dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
    const {data} = await jsonPlaceholder.get(`/users/${id}`)
    // manually dispatch
    dispatch({
        type: 'FETCH_USER',
        payload: data
    })
})



