import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
//Components
import Avatar from '@material-ui/core/Avatar';
import logo from '../images/logo-placeholder.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    headLogo:{
        width: "100%",
        textAlign: "-webkit-center",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(2),
    },
    customPaper: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(12),
        padding: theme.spacing(3)
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: theme.spacing(3)
    },
    bottomText: {
        paddingTop: theme.spacing(3)
    },
}));


function Login(props) {
    const classes = useStyles();
    const history = useHistory();
    const [isSigned, setSigned] = useState(true);
    const [loggedUser, setUser] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })

    function haveAccount () {
        setSigned(true);
    }
    function makeAccount () {
        setSigned(false);
    }
    function enterUserInfo(event) {
        const {name, value} = event.target;
        setUser(prevValue =>{
            return {
                ...loggedUser,
                [name]: value
            }
        });
    }

        return (
        <Container 
        onLoad={() => {props.isLogin(true)}}  
        component="main" 
        maxWidth="xs">
            <Box className={classes.headLogo}>
            <Avatar alt="Logo" src={logo} className={classes.large}/>
                <Typography component="h1" variant="h5">
                    {!isSigned ? "Sign up" : "Sign in"}
                </Typography>
            </Box>
            <Paper className={classes.customPaper} elevation={3}>
                <form noValidate>
                    {!isSigned &&
                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <TextField
                            onChange={enterUserInfo}
                            autoComplete="fname"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={loggedUser.firstName}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                        onChange={enterUserInfo}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={loggedUser.lastName}
                        autoComplete="lname"
                        />
                    </Grid>            
                    </Grid>}
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <TextField
                            onChange={enterUserInfo}
                            variant="outlined"  
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={loggedUser.email}
                            autoComplete="email"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            onChange={enterUserInfo}
                            variant="outlined"  
                            required
                            fullWidth
                            type="password"
                            id="password"
                            label="Password"
                            name="password"
                            value={loggedUser.password}
                            autoComplete="current-password"
                            />
                        </Grid>
                        </Grid>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label={isSigned ? "Remember me" : "Terms and conditions"}
                />
                <div className={classes.bottomText}>
                <Button
                    onClick={(event) => {
                        props.getUser(loggedUser);
                        history.push(`/feed`);
                        event.preventDefault() 
                    }}
                    type="submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    {!isSigned ? "Sign up" : "Sign in"}
                </Button>
                <Grid container className={classes.bottomText}>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: "right"}}>
                    {!isSigned ?
                    <Link onClick={haveAccount} variant="body2">
                        {"Already a member? Sign In"}
                    </Link> :
                    <Link onClick={makeAccount} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>}
                    </Grid>
                </Grid>
                </div>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;