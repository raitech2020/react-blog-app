import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from "lodash"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())

    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(id => dispatch(fetchUser(id)))
    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value()
}

// async action creator possible due to React-Thunk
export const fetchPosts = () => async (dispatch) => {
    const {data} = await jsonPlaceholder.get("/posts")
    // manually dispatch
    dispatch({
        type: "FETCH_POSTS",
        payload: data,
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

// compact version of the above fn
export const fetchUser = (id) => async (dispatch) => {
    const {data} = await jsonPlaceholder.get(`/users/${id}`)
    // manually dispatch
    dispatch({
        type: "FETCH_USER",
        payload: data,
    })
}
