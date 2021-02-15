import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
//Components
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
// Icons
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//DB
import profile from '../PetProfile';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "480px",
        margin: "auto",
        right: "auto",
        zIndex: "10",
    },
    spacingHeader: {
        justifyContent: "space-between",
        flexGrow: 1,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    customIcon: {
        margin: `0 ${theme.spacing(2)}`,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

function HeadBar () {
    const classes = useStyles();
    const [toggle, setToggle] = useState(true);
    let history = useHistory();

    function buttonToggle () {
        setToggle(!toggle);
    }
    function gotoSearch (){
        //Pass search parameters
        history.push("/Nearby")
    }

    return (
        <AppBar className={classes.root} elevation={1} color="background">
        <Toolbar className={classes.spacingHeader}>
            {toggle ? 
            <Link to="/petProfile" onClick={buttonToggle}>
                <Avatar alt="profile picture" src={profile[0].pic} className={classes.customAvatar}/>
            </Link> :
            <Link to="/feed" onClick={buttonToggle}>
                <ArrowBackIosIcon color="primary"/>
            </Link>}
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                onClick={gotoSearch}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <IconButton color="inherit" aria-label="menu">
                <Link to="/demo-app">
                    <ExitToAppIcon className={classes.customIcon} color="action" fontSize="medium"/>
                </Link>
            </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default HeadBar;
