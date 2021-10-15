import React, { useState, useEffect } from 'react'
import db from '../firebase'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(3)
    },
    cardGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
  }))

export default function Projects() {
    const classes = useStyles()
    const [work, setWork] = useState([])

    const fetchWork = async () => {
        db.collection('work').get().then(snapshot => {
            setWork(snapshot.docs)
        })
    }

    useEffect(() => {
        fetchWork()
    }, [])

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5" align="center">
                Favorite Projects
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {work.map((w, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia 
                                component="img"
                                image={w.data().image}
                                height="176"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {w.data().name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {w.data().description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href={w.data().github}>
                                    GitHub
                                </Button>
                                <Button size="small" color="primary" href={w.data().demo}>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
        );
}

