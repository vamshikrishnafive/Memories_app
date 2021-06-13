import { Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux'

import useStyles from './style'

const Post = (post) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className = {classes.card}>
            <CardMedia className ={classes.media} image = {post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title = {post.title}/>
            <div className = {classes.overlay}>
                <Typography variant = "h6">{post.creator}</Typography>
                <Typography variant = "body2">{post.createdAt}</Typography>
            </div>
        </Card>
    )
}

export default Post;