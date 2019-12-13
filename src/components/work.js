import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Work extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            The portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/ian038/my-portfolio">GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                            The portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover'}}>React Project #3</CardTitle>
                        <CardText>
                            The portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Vue</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Amazon Alexa</h1></div>
            )
        } else {
            return (
                <div><h1>Google Actions</h1></div>
            )
        }
    }


    render() {
        return (
            <div className="categry-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Vue</Tab>
                    <Tab>Amazon Alexa</Tab>
                    <Tab>Google Actions</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Work;