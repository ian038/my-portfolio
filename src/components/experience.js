import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

class Experience extends Component {
    render() {
        const { start, end, companyName, jobName, jobProjects } = this.props

        return (
            <Grid container spacing={4}>
                <Grid item xs={4} style={{ marginTop: 10, marginLeft: 25 }}>
                    <p>{start} - {end}</p>
                </Grid>
                <Grid item xs={7} style={{ marginTop: 20 }}>
                    <h4 style={{ marginTop: '0px', fontSize: '25px' }}>{jobName} - {companyName}</h4>
                    {jobProjects.map((jp, i) => (
                        <div key={i}>
                            <h3>{jp.projectName} - {jp.projectRole}</h3>
                            {jp.projectDescription.map((description, i) => (
                                <List key={i}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon />
                                        </ListItemIcon>
                                        <ListItemText>{description}</ListItemText>
                                    </ListItem>
                                </List>
                            ))}
                        </div>
                    ))}
                </Grid>
            </Grid>
        )
    }
}

export default Experience;