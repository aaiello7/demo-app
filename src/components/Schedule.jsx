import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: "40%",
    textAlign: "center",
  },
  icon: {
    fontSize: "5rem",
  }
}));

function Camera() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <IconButton>
            <ScheduleIcon className={classes.icon} color="action" />
          </IconButton>
          <Typography>
            To scheduling API
          </Typography>
        </div>
    );
}

export default Camera;