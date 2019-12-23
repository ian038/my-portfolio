import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                            alt="avatar"
                            style={{ height: '200px' }}
                        />
                        <div className="about-text">
                        <h2>About Me</h2>
                        <hr/>
                        <p>Hello, my name is Chai Ian Phua. I go by Ian. I got started in software engineering when a friend of mine asked if I would like to help with his friend's tech startup. I agreed and before I know it, I was on a never-ending journey in the world of technologies. I manage stress by participating in martial arts and gymnastics. I also love to eat and read a lot. My end goal is to have the ability to build whatever I desire as efficiently and as effectively possible.</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;