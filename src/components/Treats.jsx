import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import heroImg from '../images/placeholder3.png';
import ChallengeCard from './ChallengeCard';

import challenges from '../Challenges';

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: theme.spacing(8),
  },
}));

function Treats() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <Image
            src={heroImg}
            aspectRatio={(16/9)}
            disableSpinner
          />
          {challenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.key}
              img={challenge.img}
              title={challenge.title}
              description={challenge.description} />
          ))}
        </div>
    );
}

export default Treats;