import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function Work() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4} >
                <Grid item xs={2} style={{ marginTop: 120, marginLeft: 40 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Random Quote Machine
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/my-portfolio">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://random-quote-machine-a574d.firebaseapp.com/">
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
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Drum Machine
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/my-portfolio">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://drum-machine-ian.web.app/">
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
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Covid-19 Tracker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React and ReCharts
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/covid19_tracker">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://covid19tracker-6c390.firebaseapp.com/">
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
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Markdown Previewer
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/markdown-previewer">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://markdown-previewer-ian.web.app/">
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
                            image="https://tkacz.pro/wp-content/uploads/2018/02/vue-newsletter.png"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Exercise Tracker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with Vue, MySQL and Express
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
                <Grid item xs={2} style={{ marginTop: 80, marginLeft: 39 }}>
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
                                Built with React, MySQL and Express
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
                <Grid item xs={2} style={{ marginTop: 80, marginLeft: 20 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                JavaScript Calculator
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/javascript-calculator">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://javascript-calculator-ian.web.app/">
                            Live Demo
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2} style={{ marginTop: 80, marginLeft: 20 }}>
                <Card shadow={5} style={{maxWidth: '450', margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                            height="176"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Pomodoro Clock
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Built with React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/ian038/pomodoro-clock">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://pomodoro-clock-ian.web.app/">
                            Live Demo
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </div>
        );
}

