import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
//Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PetsIcon from '@material-ui/icons/Pets';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
    profileCard:{
        width: "100%",
        textAlign: "-webkit-center",
    },
    customPaper: {
        marginTop: theme.spacing(-4),
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginBottom: theme.spacing(2),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    headImg: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        boxShadow: theme.shadows[3],
    },
    aboutText: {
        paddingTop: theme.spacing(1),
        textAlign: "left",
        height: theme.spacing(10),
        overflow: "hidden",
        whiteSpace: "pre-wrap",
    },
    fab: {
        bottom: theme.spacing(-2),
        // right: theme.spacing(-2),
    },
}));

function ContactCard (props) {
    const classes = useStyles();
    let history = useHistory();

    function goToTreats(){
        history.push(props.fabLink);
    }
    return (
        <div className={classes.root}>
            <Box className={classes.profileCard}>
                <Avatar alt="ProfilePic" src={props.pic} className={classes.headImg}/>
                <Paper className={classes.customPaper} elevation={2}>
                <Typography variant="h5">
                    {props.firstName} {props.lastName}
                </Typography>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={8}>
                        <Typography className={classes.aboutText}>
                            {props.about}
                        </Typography>
                    </Grid>
                    <Grid item m>
                        <Fab 
                        onClick={goToTreats}
                        className={classes.fab} c
                        olor="primary" 
                        aria-label="add">
                            {props.type === "pet" ?
                                <PetsIcon 
                                /> :
                                <ScheduleIcon /> }
                        </Fab>
                    </Grid>
                </Grid>
                </Paper>
            </Box>
        </div>
    );
}

export default ContactCard;


