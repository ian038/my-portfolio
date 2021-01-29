import React from 'react'
import { Container, Grid, List, ListItem, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contactGrid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      textAlign: 'center',
      justifyContent: 'center'
    }
}))


export default function Contact() {
    const classes = useStyles()

    return (
        <div className="contact-body">
            <Container maxWidth="auto">
                <Grid container spacing={4} className={classes.contactGrid}>
                    <Grid item xs={12} sm={6} md={4}>
                        <h1>Chai Ian Phua</h1>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ margin: 'auto', paddingTop: '1em' }}>HTML/CSS | Javascript | SQL | NoSQL | Express | VB.Net | Python | Java</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h1>Contact Me</h1>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                    </ListItemIcon>
                                    <h3 style={{ fontSize: '30px', fontFamily: 'Anton' }}>(614) 607-0882</h3>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fa fa-at" aria-hidden="true" />
                                    </ListItemIcon>
                                    <h3 style={{ fontSize: '30px', fontFamily: 'Anton' }}>ianphua3@gmail.com</h3>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
