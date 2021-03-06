import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; //dispatch an action

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'
import useStyles from './styles'

//currentId={currentId} setCurrentId={setCurrentId}
const App = () => {
    const [currentId, setCurrentId] = useState(null) //use react hook to share the current id state between Posts and Form components under App parent layer
    const classes = useStyles()
    const dispatch = useDispatch() 

    useEffect(() => {  //where you are going to dispatch the action
        dispatch(getPosts()) //the action is getPosts()
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId = {setCurrentId} />  
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                    </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App