import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Chai Ian Phua</h2>
                        <h4 style={{color: 'gray'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <p>Hello, pleased to meet you and welcome to my portfolio!</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <h5>Phone</h5>
                        <p>(614) 607-0882</p>
                        <h5>Email</h5>
                        <p>ianphua3@gmail.com</p>
                        <h5>Web</h5>
                        <p>my-portfolio-96172.firebaseapp.com.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>
                        <Education 
                            start="Jan 2016"
                            end="Aug 2018"
                            schoolName="The Ohio State University"
                            schoolDescription="Transfered from Sunway University to attend The Ohio State University. Majored in Psychology and eventually graduated with a Bachelor of Arts in August 2018."
                        />
                        <Education 
                            start="Jan 2014"
                            end="Dec 2015"
                            schoolName="Sunway University"
                            schoolDescription="Was accepted into the American Transfer Program at Sunway University in home country of Malaysia. After completing the first two years of the program in Malaysia, transfered to The Ohio State University in January 2016."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            start="Jan 2019"
                            end="Current"
                            jobName="Software Engineer"
                            jobDescription="Worked as a freelancing software engineer. Built multiple voice apps for Amazon Alexa and Google Actions. Made extensive use of Firebase to store customer data of clients. Also designed and built out webpages and websites using Javascript front end libraries such as React and Vue for UI/UX."
                        />
                        <Experience
                            start="Oct 2018"
                            end="Jan 2019"
                            jobName="Aide"
                            jobDescription="Hired as an aide at Haugland Learning Center. Learnt to practice Behavioral Psychology using techniques to record behavior data and to use recorded data to customize an educational plan for children with Autism Spectrum Disorder."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={75}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={75}
                        />
                        <Skills 
                            skill="MongoDB"
                            progress={75}
                        />
                        <Skills 
                            skill="Express"
                            progress={75}
                        />
                        <Skills 
                            skill="Amazon Alexa"
                            progress={85}
                        />
                        <Skills 
                            skill="Google Actions"
                            progress={85}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="Firebase"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={25}
                        />
                        <Skills 
                            skill="Python"
                            progress={10}
                        />
                        <Skills 
                            skill="Vue"
                            progress={0}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;