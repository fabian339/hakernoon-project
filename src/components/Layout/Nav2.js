import React, { Component, Fragment } from 'react'
// import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Link = require("react-router-dom").Link

// second nav class-based component
export class Nav extends Component {
    
    render() {
        return (
            <Fragment>
                <AppBar position="relative">
                    <Toolbar style={styles.navContainer}>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/" >Read</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/top-stories" >Top Stories</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Write" >Write</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Learn" >Learn</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Advertise" >Advertise</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/About" >About</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Tech-Company" >Tech Company</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Careers" >Careers</Button>
                        </Typography>
                        <Typography variant="h6">
                            <Button style={styles.navButtons} color="inherit" component={Link} to="/Slogging" >Slogging</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{width: "100%", height: "45px", backgroundColor: "rgb(245, 236, 67)"}}>
                    <div>
                        <a style={styles.spectra} href="https://bit.ly/2PPkdME" target="_blank" rel="noreferrer">
                            <img style={{ marginRight: '10px', width: '25px', borderRadius: '2px'}} src="https://hackernoon.com/images/img-8i133ho.png" alt="Particle ad" />
                            Join 3500 Developers at Spectra March 17th
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// component style object
const styles = {
    navContainer: {
        backgroundColor: "rgb(0, 59, 0)",
        justifyContent: 'center',
        minHeight: '45px',
    },
    navButtons: {
        fontSize: "1rem",
        color: "#ffff",
        fontWeight: "bold",
        textTransform: 'none',
    },
    spectra: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        color: 'rgb(102, 97, 5)',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
};


export default (Nav);