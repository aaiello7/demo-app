import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ActivityCard from './ActivityCard';
import SkeletonTileItem from './SkeletonTileItem';

import feedActivity from '../feedActivity';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        margin: "0 auto",
        marginTop: theme.spacing(4),
    },
}));

function ActivityFeed(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {(loading ? Array.from(new Array(10)) : feedActivity).map((item, index) => (
            <div>
            {item ? (
                <ActivityCard 
                key={item.key}
                title={item.title}
                image={item.img} 
                detail={item.detail} 
                />  
            ) : (
                <SkeletonTileItem />
            )}
            </div>
        ))}

        </div>
    );
}

export default ActivityFeed;


