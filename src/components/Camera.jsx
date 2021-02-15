import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';


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
            <AddAPhotoIcon className={classes.icon} color="action" />
          </IconButton>
        </div>
    );
}

export default Camera;