import React, { useState } from "react";
import "./App.css";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, IconButton, Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Main from './components/main';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    title: {
      flexGrow: 1,
    },
    links : {
        marginRight: 30,
        textDecoration: 'none',
        color: 'white'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }
  }));


function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

  return (
    <div className="demo-big-content">
        <AppBar position="fixed" id="header-color" className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
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
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}>
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link className="drawer_links" to="/resume">Resume</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link className="drawer_links" to="/aboutme">About Me</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link className="drawer_links" to="/work">Work</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link className="drawer_links" to="/contact">Contact</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
        <Main />
</div>
  );
}

export default App;
