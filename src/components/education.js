import React, { Component } from 'react';
import { Grid } from '@material-ui/core'

class Education extends Component {
    render() {
        const { start, end, schoolName, schoolDescription } = this.props
        return (
            <Grid container spacing={4}>
                <Grid item xs={4} style={{ marginTop: 10, marginLeft: 25 }}>
                    <p >{start} - {end}</p>
                </Grid>
                <Grid item xs={7} style={{ marginTop: 20 }}>
                    <h4 style={{marginTop: '0px', fontSize: '20px'}}>{schoolName}</h4>
                    <p>{schoolDescription}</p>
                </Grid>
            </Grid>
        )
    }
}

export default Education;