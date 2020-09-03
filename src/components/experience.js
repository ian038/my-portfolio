import React, { Component } from 'react';
import { Grid } from '@material-ui/core'

class Experience extends Component {
    render() {
        const { start, end, jobName, jobDescription } = this.props
        return (
            <Grid container spacing={4}>
                <Grid item xs={4} style={{ marginTop: 10, marginLeft: 25 }}>
                    <p>{start} - {end}</p>
                </Grid>
                <Grid item xs={7} style={{ marginTop: 20 }}>
                    <h4 style={{marginTop: '0px', fontSize: '25px'}}>{jobName}</h4>
                    <p>{jobDescription}</p>
                </Grid>
            </Grid>
        )
    }
}

export default Experience;