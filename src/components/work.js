import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
  });

export default function Work() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} style={{ justifyContent: 'center' }}>
            <Grid item xs={2} style={{ marginTop: 120, marginLeft: 20 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Social Media App
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A full stack social media web app built with React, MongoDB and Spring Boot
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/socialmedia">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://socmediaappfront.web.app/">
                            Live Demo
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            <Grid item xs={2} style={{ marginTop: 120, marginLeft: 20 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROeZjbmxiKWOF_INtASx-E_JVWI1YtrL6wHw&usqp=CAU"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Exercise Tracker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A full stack exercise tracker app built with Vue, MySQL and Express
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/ExerTracker">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://mernexertracker.herokuapp.com/">
                            Live Demo
                        </Button>
                    </CardActions>
                </Card>
                </Grid> 
                <Grid item xs={2} style={{ marginTop: 120, marginLeft: 39 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                National Parks List
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Full stack web app to show national parks in the US using React, MySQL and Express
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/nationalpark_list">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://nationalparklist.herokuapp.com/">
                            Live Demo
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </div>
        );
}

