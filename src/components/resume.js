import React, { useState, useEffect } from 'react'
import db from '../firebase'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Education from './education';
import Experience from './experience';
import AboutMe from './aboutme';

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
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])
  const [aboutMe, setAboutMe] = useState([])

  const fetchAboutMe = () => {
    db.collection('aboutme').get().then(snapshot => {
      setAboutMe(snapshot.docs)
    })
  }

  const fetchEducation = () => {
    db.collection('education').get().then(snapshot => {
      setEducation(snapshot.docs)
    })
  }

  const fetchExperience = () => {
    db.collection('experience').get().then(snapshot => {
      setExperience(snapshot.docs)
    })
  }

  useEffect(() => {
    fetchAboutMe()
    fetchEducation()
    fetchExperience()
  }, [])

  return (
    <div className={classes.root}>
      <Container className={classes.resumeGrid}>
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
            <p>Forward-thinking Software Engineer with background working effectively in dynamic environment. Proud team player focused on achieving project objectives with speed and accuracy.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            
            <h5 style={{ fontSize: '16px' }}>Phone</h5>
            <p style={{ fontSize: '15px' }}>(614) 607-0882</p>
            <h5 style={{ fontSize: '16px' }}>Email</h5>
            <p style={{ fontSize: '15px' }}>ianphua3@gmail.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            {
              aboutMe.map((am, i) => (
                <AboutMe
                key={i}
                programmingLanguages={am.data().programmingLanguages}
                toolsAndTechnologies={am.data()['Tools&Technologies']}
                certifications={am.data().Certifications}
                />
              ))
            }
          </Grid>
          <Grid item xs className="resume-right-col">
            <h2 style={{ fontSize: '35px' }}>Education</h2>
            {education.map((e, i) => (
              <Education
                key={i}
                start={e.data().start}
                end={e.data().end}
                schoolName={e.data().schoolName}
                schoolDescription={e.data().schoolDescription}
              />
            ))}
            <hr style={{ borderTop: '3px solid red' }} />
            <h2 style={{ fontSize: '35px' }}>Experience</h2>
            {experience.map((exp, i) => (
              <Experience
                key={i}
                start={exp.data().start}
                end={exp.data().end}
                companyName={exp.data().companyName}
                jobName={exp.data().jobName}
                jobProjects={exp.data().jobProjects}
              />
            ))}
            <hr style={{ borderTop: '3px solid red' }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}



