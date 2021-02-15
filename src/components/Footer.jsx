import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExtLink from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Box } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        maxWidth: "480px",
        width: "100%",
        position: "fixed",
        bottom: "0px",
    },
    navBar: {
        margin: theme.spacing(2),
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
        borderRadius: theme.spacing(3),
    } 
}));

function Copyright() {
    return (
        <Box p={2} >
        <Typography p={2} variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
            <ExtLink color="inherit" href="https://cdn.vox-cdn.com/thumbor/qQPUPBlaiVYrsXg5QM1QQYVgH34=/0x0:900x500/1400x1400/filters:focal(378x178:522x322):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg">
                This is fine company
            </ExtLink>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

function Footer(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState("");
    let history = useHistory();


    const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${newValue}`);
    };

    const removeLabel = (event) => {
    setValue("");
    };

    return (
        <footer className={classes.stickToBottom}>
            {!props.isLogin ? 
                <BottomNavigation>
                <   Copyright /> 
                </BottomNavigation>
                :  
                <div onMouseLeave={removeLabel}>
                    <BottomNavigation value={value} onChange={handleChange} className={props.isLogin && classes.navBar}>
                        <BottomNavigationAction label="Treats" value="Treats" icon={<PetsIcon />} />
                        <BottomNavigationAction label="Camera" value="Camera" icon={<CameraAltIcon />} />
                        <BottomNavigationAction label="Nearby" value="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </div>
            }
        </footer>
    );
}

export default Footer;