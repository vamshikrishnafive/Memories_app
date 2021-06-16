import { Card, CardMedia, Typography } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import useStyles from './style'

const Post = (post) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        
    },[])

    return (
        <Card className = {classes.card}>
           {/* { console.log(post.post.title)} */}
            <CardMedia className ={classes.media} image = {post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title = {post.post.title}/>
            <div className = {classes}>
                <Typography variant = "h6">{post.post.title}</Typography>
                <Typography variant = "h6">{post.post.message}</Typography>
            </div>
        </Card>
    )
}

export default Post;