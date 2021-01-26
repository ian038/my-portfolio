import React from 'react';
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Education from './education';
import Experience from './experience';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3)
    },
    resumeGrid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  }))

export default function About() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
          <Container className={classes.resumeGrid} maxWidth="auto">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
              <div style={{ textAlign: 'center' }}>
                  <img
                  src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                  alt="avatar"
                  style={{ height: '200px' }}
                  />
              </div>
              <h2 style={{ paddingTop: '1em', fontSize: '35px' }}>Chai Ian Phua</h2>
              <h3 style={{ color: 'gray' }}>Software Engineer</h3>
              <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
              <p>Hello, pleased to meet you and welcome to my portfolio!</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
              <h5 style={{ fontSize: '18px' }}>Phone</h5>
              <p style={{ fontSize: '15px' }}>(614) 607-0882</p>
              <h5 style={{ fontSize: '18px' }}>Email</h5>
              <p style={{ fontSize: '15px' }}>ianphua3@gmail.com</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
              </Grid>
              <Grid item xs className="resume-right-col">
              <h2 style={{ fontSize: '35px' }}>Education</h2>
              <Education
              start="Jan 2020"
              end="April 2022"
              schoolName="Cincinnati State Technical and Community College"
              schoolDescription="Currently pursuing an Associates Degree in Software Engineering Technology. Relevant courses include but are not limited to Java, VB.Net, C, SQL and Business Intelligence."
              />
              <Education
              start="Jan 2016"
              end="Aug 2018"
              schoolName="The Ohio State University"
              schoolDescription="Majored in Psychology and eventually graduated with a Bachelor of Arts in August 2018."
              />
              <hr style={{ borderTop: '3px solid red' }} />
              <h2 style={{ fontSize: '35px' }}>Experience</h2>
              <Experience
              start="Jan 2019"
              end="Feb 2020"
              jobName="Software Engineer Intern"
              jobDescription="Developed and designed test driven voice apps for Amazon Alexa and Google Actions. 
              Implemented frontend library ReactJS for Musicians AI web app for better performance and a modern look.
              Interacted with Firebase Cloud Firestore for CRUD operations."
              />
              <hr style={{ borderTop: '3px solid red' }} />
              </Grid>
            </Grid>
          </Container>
    </div>
    );
}



