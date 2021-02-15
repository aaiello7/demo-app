import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TileItem from './TileItem';
import SkeletonTileItem from './SkeletonTileItem';

import feedPosts from '../feedPosts';

const useStyles = makeStyles((theme) => ({
    root: {
        columnCount: "2",
        columnGap: theme.spacing(2),
        width: "90%",
        margin: `${theme.spacing(8)}px auto`,
    },
}));

function SocialFeed(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {(loading ? Array.from(new Array(10)) : feedPosts).map((item, index) => (
            <div>
            {item ? (
                <TileItem 
                key={item.key}
                user={item.author}
                image={item.img} 
                comment={item.title} 
                />  
            ) : (
                <SkeletonTileItem />
            )}
            </div>
        ))}

        </div>
    );
}

SocialFeed.propTypes = {
    loading: PropTypes.bool,
};

export default SocialFeed;


