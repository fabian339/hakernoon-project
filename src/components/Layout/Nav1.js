import React, { Component, Fragment } from 'react'
// import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Link = require("react-router-dom").Link


export class Nav extends Component {
    state = {
        anchorEl: null,
        open: false,
      };
    

    render() {
        return (
            <AppBar position="relative">
                <Toolbar style={styles.navContainer}>
                    <Typography variant="h6" style={styles.title}>
                        <Button style={styles.navButtons} color="inherit" component={Link} to="/" >
                            <img src="/hn-logo.png" alt="Hackernoon logo" width="248" height="40" loading="lazy" />
                        </Button>
                    </Typography>
                    <Typography variant="h6">
                        <form style={styles.form}>
                            <input style={styles.formInput} name="searchvalue" placeholder="Search..." />
                            <img style={styles.formIcon} src="/search-new.png" alt="Search icon" width="19" height="19" loading="lazy" />
                        </form>                    
                    </Typography>
                    <Typography variant="h6">
                        <div style={{marginRight: '1rem'}}>
                            <a href="https://hackernoon.com/login" style={styles.startWriting}>Start Writing</a>
                        </div>                    
                    </Typography>
                    <Typography variant="h6">
                        <div style={{marginRight: '1rem'}}>
                            <a href="https://hackernoon.com/login" style={styles.logIn}>Log in</a>
                        </div>
                    </Typography>
                    <Typography variant="h6">
                        <button type="button" style={styles.sunIcon}>
                            <i className="fas fa-sun"></i>
                        </button>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

const styles = {
    navContainer: {
        backgroundColor: "rgb(0, 255, 0)"
    },
    navButtons: {
        fontSize: "initial",
        color: "dimgray",
        fontWeight: "600"
    },
    title: {
        flexGrow: 1,
      },
    menuItem: {
        fontSize: "13px",
        fontWeight: "600",
        color: "dimgray" ,
    },
    form: {
        position: 'relative',
        marginRight: '1rem',
    },
    formInput:{
        backgroundColor: 'rgb(0, 59, 0)',
        border: 'none',
        padding: '10px 20px 10px 10px',
        borderRadius: '2px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        transition: 'all 120ms ease-in-out 0s',
        outlineColor: 'rgb(0, 187, 0)',
        color: 'rgb(0, 255, 0)',
    },
    formIcon: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        width: '19px',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
    },
    startWriting: {
        color: 'rgb(33, 36, 40)',
        border: '2px solid rgb(33, 36, 40)',
        borderRadius: '2px',
        fontSize: '1rem',
        fontWeight: 600,
        padding: '0.6rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        outline: 'none',
        lineHeight: 1,
        textDecoration: 'none',
    },
    logIn: {
        color: 'rgb(33, 36, 40)',
        fontWeight: 600,
        padding: '0.6rem 1rem',
        textDecoration: 'none'
    },
    sunIcon:{
        fontSize: '2rem',
        color: '#037503',
        width: '60px',
        height: '60px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: '0px',
        overflow: 'hidden',
        cursor: 'pointer',
    }
};


export default (Nav);