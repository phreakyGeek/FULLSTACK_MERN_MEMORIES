import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'
import style from './styles';
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actiions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  // console.log(moment(post.createdAt).fromNow())
  return (
      <>
        <Card style={style.card}>
          <CardMedia style={style.media} image={post.selectedFile} />
          <div style={style.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div style={style.overlay2}>
            <Button
              style={{color: 'white'}}
              size="small"
              onClick={() => setCurrentId(post._id)} >
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
          <div style={style.details}>
            <Typography variant='body2' color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
          </div>
          <Typography style={style.title} variant='h5' gutterBottom>{post.title}</Typography>
          <CardContent>
            <Typography variant='h5' gutterBottom>{post.message}</Typography>
          </CardContent>
          <CardActions style={style.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
              <ThumbUpAltIcon fontSize="small" />
              Like
              {post.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </CardActions>
        </Card>

      </>
  )
}

export default Post

