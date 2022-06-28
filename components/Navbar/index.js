import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import Link from "next/link"

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Training Material UI
          </Typography>
          <Button color="inherit">
            <Link href={{pathname:"/"}}><a className="nav-link">Home</a></Link>
          </Button>
          <Button color="inherit">
            <Link href={{pathname:"/fetch-data"}}><a className="nav-link">Fetch Data</a></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
