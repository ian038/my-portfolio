import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Education from './education';
import Experience from './experience';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

export default function About() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
          <Grid container spacing={5} justify="center">
            <Grid item xs={3}>
            <div style={{ textAlign: 'center' }}>
                <img
                src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                alt="avatar"
                style={{ height: '200px', marginTop: 100 }}
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
            <Grid item xs={8} style={{ marginTop: 100, marginLeft: 50 }} className="resume-right-col">
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
            schoolDescription="Attended The Ohio State University. Majored in Psychology and eventually graduated with a Bachelor of Arts in August 2018."
            />
            <hr style={{ borderTop: '3px solid red' }} />
            <h2 style={{ fontSize: '35px' }}>Experience</h2>
            <Experience
            start="Jan 2019"
            end="Feb 2020"
            jobName="Software Engineer Intern"
            jobDescription="Interned at Voice First Tech. Built multiple voice apps for Amazon Alexa and Google Actions. Made extensive use of Firebase to store customer data of clients. Also designed and built out webpages and websites using Javascript front end libraries such as React and Vue for UI/UX."
            />
            <Experience
            start="Oct 2018"
            end="Jan 2019"
            jobName="Aide"
            jobDescription="Hired as an aide at Haugland Learning Center. Learnt to practice Behavioral Psychology using techniques to record behavior data and to use recorded data to customize an educational plan for children with Autism Spectrum Disorder."
            />
            <Experience
            start="Feb 2018"
            end="April 2019"
            jobName="Student Manager"
            jobDescription="Delegated tasks to employees to ensure facility's daily goals are met through team work. Assessed and evaluated errors and risks to minimize production downtime."
            />
            <hr style={{ borderTop: '3px solid red' }} />
            </Grid>
      </Grid>
    </div>
    );
}



