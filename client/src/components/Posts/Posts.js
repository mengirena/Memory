import React from 'react'
import { useSelector } from 'react-redux' // use useSelector to fetch the data from the global redux store
import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
    const posts = useSelector((state) => state.posts) //defined posts through combineReducers() in reducer/index.js

    console.log(posts)
    const classes = useStyles();
    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>
    )
}

export default Posts