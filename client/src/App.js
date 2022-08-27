import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import style from './styles'
import { useDispatch } from 'react-redux';
import { getPosts } from './actiions/posts'
const App = () => {
  const dispatch = useDispatch()
  const [ currentId, setCurrentId ] = useState(null)
  useEffect(() => {
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar style={style.appBar} position="static" color="inherit" >
        <Typography style={style.heading} variant='h2' align="center">
          Memories
        </Typography>
        <img style={style.image} src={memories} alt="memories" height="60"  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App