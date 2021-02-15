import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProgressCircle from './ProgressCircle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(3)}px auto`,
    width: '90%',
  },
  badge: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  heading: {
    width: "max-content",
    fontSize: theme.typography.pxToRem(17),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
  details: {
    alignItems: 'center',
  },
  column: {
    padding: theme.spacing(1),
    flexBasis: 'fill',
  },
  helper: {
    borderRight: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  rating: {
    margin: "auto",
  },
}));

function ChallengeCard (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="challenge-content"
          id="challenge-header"
        >
          <div className={classes.column}>
          <Avatar 
            className={classes.badge}
            img={props.img}>
            </Avatar>          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>{props.title}</Typography>
            <Typography className={classes.secondaryHeading}>{props.description}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography className={classes.secondaryHeading}>
              Your progress:
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.rating)}>
            <ProgressCircle />
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Commit</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default ChallengeCard;