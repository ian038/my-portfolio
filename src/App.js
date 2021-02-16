import React, { useState, useEffect } from "react";
import "./App.css";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, IconButton, Typography, Divider, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Main from './components/main';
import { Link, withRouter } from 'react-router-dom';
import Speech from './components/Speech'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'hidden',
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


function App({ history }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900 ? setMobile(true) : setMobile(false)
      }
      setResponsiveness()
      window.addEventListener("resize", () => setResponsiveness())
    }, [])

    const isActive = (history, path) => {
      if(history.location.pathname === path) return { color: '#00FFFF' }
      else return { color: 'white' }
    }

    const mobileView = () => {
      const handleDrawerOpen = () => {
        setOpen(true)
      }

      const handleDrawerClose = () => {
        setOpen(false)
      }
      return (
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
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
                      <ListItemText onClick={() => window.location.href=`/resume`}>
                        Resume
                      </ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText onClick={() => window.location.href=`/aboutme`}>
                        About Me
                      </ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText onClick={() => window.location.href=`/work`}>
                        Work
                      </ListItemText>
                  </ListItem>
                  <ListItem button>
                      <ListItemText onClick={() => window.location.href=`/contact`}>
                        Contact
                      </ListItemText>
                  </ListItem>
              </List>
          </Drawer>
        </Toolbar>
      )
    }

    const desktopView = () => (
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">MyPortfolio</Link>
        </Typography>
        <Typography>
            <Link className={classes.links} to="/resume" style={isActive(history, '/resume')}>Resume</Link>
        </Typography>
        <Typography>
            <Link className={classes.links} to="/aboutme" style={isActive(history, '/aboutme')}>About Me</Link>
        </Typography>
        <Typography>
            <Link className={classes.links} to="/work" style={isActive(history, '/work')}>Work</Link>
        </Typography>
        <Typography>
            <Link className={classes.links} to="/contact" style={isActive(history, '/contact')}>Contact</Link>
        </Typography>
        <Speech />
    </Toolbar>
    )

  return (
    <div>
      <CssBaseline />
        <AppBar position="relative" id="header-color" className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
          {mobile ? mobileView() : desktopView()}
        </AppBar>
      <Main />
</div>
  );
}

export default withRouter(App);
