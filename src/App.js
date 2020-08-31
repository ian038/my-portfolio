import React from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Main from './components/main';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    links : {
        marginRight: 30,
        textDecoration: 'none',
        color: 'white'
    }
  }));


function App() {
    const classes = useStyles();

  return (
    <div className="demo-big-content">
        <AppBar position="static" className="header-color">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">MyPortfolio</Link>
                </Typography>
                <Typography>
                    <Link className={classes.links} to="/resume">Resume</Link>
                </Typography>
                <Typography>
                    <Link className={classes.links} to="/aboutme">About Me</Link>
                </Typography>
                <Typography>
                    <Link className={classes.links} to="/work">Work</Link>
                </Typography>
                <Typography>
                    <Link className={classes.links} to="/contact">Contact</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    {/* <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout> */}
</div>
  );
}

export default App;
