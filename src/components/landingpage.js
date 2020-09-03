import React, { Component } from 'react';
import { Grid } from '@material-ui/core'


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid container className="landing-grid">
                    <Grid xs={12} style={{ marginTop: 30 }}>
                        <img 
                        src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                        alt="My avatar placeholder"
                        className="avatar-image"
                         />

                         <div className="banner-text">
                            <h1>I am Ian.</h1>
                            <hr/>
                            <h2>A hacker, tinkerer and a creator. I live to build, create and innovate.</h2>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/chai-ian-phua-915452b9/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin"  aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/ian038" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                                {/* freecodecamp */}
                                <a href="https://www.freecodecamp.org/ian038" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>
                            </div>
                         </div>
                    </Grid>
               </Grid>
            </div>
        );
    }
}

export default Landing ;