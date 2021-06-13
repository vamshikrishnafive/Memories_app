import React, {useEffect} from 'react'
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from './style';
import Post from './components/Posts/Posts.js';
import Form from './components/Form/Form';
import { getPosts } from './actions/post.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">MemoriesApp</Typography>
        </AppBar>
        <Grow in>
            <Container maxWidth="lg">
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Post />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        </>
    )
}

export default App