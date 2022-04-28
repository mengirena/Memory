// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js'; //import everything from the api

// Action Creators: are functions that return actions, and an action is just an object with a type and payload
// ig, 
// const getPosts = () => {
//    const action = { type: "FETCH_ALL", payload: [] }
//    return action  
// }

// However, transferring data is async so we need redux-thunk to do it, 
// which is to add an additional async function, use dispatch as property
// Instead of return an action, we dispatch the action
// ig,
// 
// const getPosts = () => async (dispatch) {
//    const action = { type: "FETCH_ALL", payload: [] }
//    dispatch(action)  
// }

export const getPosts = () => async (dispatch) => { //using redux thunk to allow us to add an additional async function
  try {
    const { data } = await api.fetchPosts(); //response.data

    dispatch({ type: 'FETCH_ALL', payload: data }); //sending data through payload
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };